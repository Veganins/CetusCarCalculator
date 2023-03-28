import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { Prisma, ROLE } from "@prisma/client";
import { randomBytes } from "crypto";
import { add } from "date-fns";
import { RepositoryUserLoginsRepository } from "src/repositories/Auth/userLogin/repository.userLogin.Repository";
import { RepositoryUserLoginsDataFactory } from "src/repositories/Auth/userLogin/repository.userLogin.dataFactory";
import { JwtPayload } from "src/types/jwtPayload.type";

@Injectable()
export class ServicesAuthTokenService {
    private readonly REFRESH_TOKEN_TIME_IN_MINUTES = 60 * 24 * 7;
    private readonly SESSION_NO_EXPIRE_LIVE_IN_MINUTES = 60 * 24 * 365;
    private readonly ONE_MINUTE_IN_MILLISECONDS = 60000;
    private readonly ONE_MINUTE_IN_SECONDS = 60;

    constructor(
        private readonly jwtService: JwtService,
        private readonly config: ConfigService,
        private readonly userLoginsRepository: RepositoryUserLoginsRepository
    ) {}
    async getAccessToken(userId: number, roles: string, isInfiniteSessionLive: boolean) {
        const refreshTokenExpirationDate =
            this.getRefreshTokenExpirationDate(isInfiniteSessionLive);
        const sessionExpirationDate = this.getSessionExpirationDate(isInfiniteSessionLive);
        const accessTokenDuratition = this.getAccessTokenDuration(isInfiniteSessionLive);

        const jwtPayload: JwtPayload = {
            userId: userId,
            roles: roles,
            refreshTokenExpirationDate: refreshTokenExpirationDate,
            sessionExpirationDate: sessionExpirationDate,
        };
        const accessToken = await this.jwtService.signAsync(jwtPayload, {
            secret: this.config.get<string>("JWT_SECRET"),
            expiresIn: accessTokenDuratition,
        });

        return accessToken;
    }
    async generateAndSaveNewUserRefreshToken({
        roles,
        userId,
        isInfiniteSessionLive,
    }: {
        userId: number;
        roles: string;
        isInfiniteSessionLive?: boolean;
    }) {
        const newRefreshTokenExpirationTime =
            this.getRefreshTokenExpirationDate(isInfiniteSessionLive);
        const newRefreshToken = this.getRefreshToken();

        const refreshTokenCreateData: Prisma.UserLoginCreateInput = {
            ...RepositoryUserLoginsDataFactory.refreshToken(newRefreshToken),
            ...RepositoryUserLoginsDataFactory.expirationDate(newRefreshTokenExpirationTime),
            ...RepositoryUserLoginsDataFactory.Role(roles),
            ...RepositoryUserLoginsDataFactory.User(userId),
        };

        await this.userLoginsRepository.create(refreshTokenCreateData);

        return newRefreshToken;
    }
    getCookieMaxAge(isInfiniteSessionLive: boolean) {
        if (isInfiniteSessionLive) {
            return this.ONE_MINUTE_IN_MILLISECONDS * this.SESSION_NO_EXPIRE_LIVE_IN_MINUTES;
        } else {
            return this.ONE_MINUTE_IN_MILLISECONDS * this.REFRESH_TOKEN_TIME_IN_MINUTES;
        }
    }
    private getRefreshToken() {
        return randomBytes(64).toString("hex");
    }
    private getRefreshTokenExpirationDate(isInfiniteSessionLive: boolean) {
        const now = Date.now();

        if (isInfiniteSessionLive) return add(now, { years: 1 });
        return add(now, { weeks: 1 });
    }
    private getSessionExpirationDate(isInfiniteSessionLive: boolean) {
        const now = Date.now();

        if (isInfiniteSessionLive) return add(now, { years: 1 });
        return add(now, { hours: 1 });
    }
    private getAccessTokenDuration(isInfiniteSessionLive: boolean) {
        if (isInfiniteSessionLive) {
            return this.ONE_MINUTE_IN_SECONDS * this.SESSION_NO_EXPIRE_LIVE_IN_MINUTES;
        } else {
            return this.ONE_MINUTE_IN_SECONDS * this.REFRESH_TOKEN_TIME_IN_MINUTES;
        }
    }
}
