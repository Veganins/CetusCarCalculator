import { Injectable } from "@nestjs/common";
import * as argon from "argon2";
import { Response } from "express";
import { ServicesAuthValidator } from "./services.auth.validator";
import { Prisma } from "@prisma/client";
import { ServicesAuthTokenService } from "./servises.auth.tokens.service";
import { RegisterDto } from "src/api/public/auth/dto/auth.registerUser.dto";
import { SignInDto } from "src/api/public/auth/dto/auth.signInUser.dto";
import { SignInUserEntity } from "src/api/public/auth/entity/auth.signIn.entity";
import { AccessTokenEntity } from "src/api/public/auth/entity/auth.accessTockenEntity";
import { RepositoryUserLoginsRepository } from "src/repositories/Public/Auth/userLogin/repository.userLogin.Repository";
import { RepositoryUserLoginsFilterFactory } from "src/repositories/Public/Auth/userLogin/repository.userLogins.filterFactory";
import { RepositoryUsersDataFactory } from "src/repositories/Public/Auth/users/repository.users.dataFactory";
import { RepositoryUsersFilterFactory } from "src/repositories/Public/Auth/users/repository.users.filterFactory";
import { RepositoryUsersRepository } from "src/repositories/Public/Auth/users/repository.users.repository";

@Injectable()
export class ServisesAuthServise {
    constructor(
        private readonly usersRepository: RepositoryUsersRepository,
        private readonly repositoryUserLoginsRepository: RepositoryUserLoginsRepository,
        private readonly tokensService: ServicesAuthTokenService,
        private readonly validator: ServicesAuthValidator
    ) {}
    async signup(registerdata: RegisterDto): Promise<void> {
        //geanerate the password hash
        const {
            password,
            confirmpassword,
            email,
            birthDate,
            expirationDateDrivingLicense,
            address,
            phoneNumber,
        } = registerdata;
        this.validator.passwordValidatorErrorHandler(password, confirmpassword);
        await this.validator.emailValidatorErrorHandler(email);
        this.validator.birthDateValidatorErrorHandler(birthDate);
        this.validator.expirationDateDrivingLicenseValidatorErrorHandler(
            expirationDateDrivingLicense
        );
        const hashedPassword = await argon.hash(password);

        const createUserData: Prisma.UserCreateInput = {
            ...RepositoryUsersDataFactory.password(hashedPassword),
            ...RepositoryUsersDataFactory.email(email),
            ...RepositoryUsersDataFactory.birthDate(birthDate),
            ...RepositoryUsersDataFactory.expirationDateDrivingLicense(
                expirationDateDrivingLicense
            ),
            ...RepositoryUsersDataFactory.address(address),
            ...RepositoryUsersDataFactory.phoneNumber(phoneNumber),
            ...RepositoryUsersDataFactory.setRoleToNormalUser(),
        };
        await this.usersRepository.create(createUserData);
    }
    async signin({
        isInfiniteSessionLive,
        res,
        signInUserData,
    }: {
        signInUserData: SignInDto;
        isInfiniteSessionLive: boolean;
        res: Response;
    }): Promise<SignInUserEntity> {
        const { password, email } = signInUserData;
        const where: Prisma.UserWhereUniqueInput = {
            ...RepositoryUsersFilterFactory.email(email),
        };
        const user = await this.usersRepository.findUnique(where);
        await this.validator.checkIfPasswordsMatch(user.password, password);
        const accessToken = await this.tokensService.getAccessToken(
            user.id,
            user.roles,
            isInfiniteSessionLive
        );
        const refreshToken = await this.tokensService.generateAndSaveNewUserRefreshToken({
            userId: user.id,
            roles: user.roles,
            isInfiniteSessionLive,
        });
        const maxAge = this.tokensService.getCookieMaxAge(isInfiniteSessionLive);

        res.cookie("refreshToken", refreshToken, {
            maxAge: maxAge,
            httpOnly: true,
            sameSite: "lax",
            domain: process.env.COOKIE_DOMAIN,
        });

        return new SignInUserEntity({ accessToken });
    }
    async logoutUser(refreshToken: string, res: Response): Promise<void> {
        console.log(refreshToken);

        const where: Prisma.UserLoginWhereUniqueInput = {
            ...RepositoryUserLoginsFilterFactory.refreshToken(refreshToken),
        };

        await this.repositoryUserLoginsRepository.delete(where);
        res.clearCookie("refreshToken");
    }

    async refreshToken(refreshToken: string, res: Response): Promise<AccessTokenEntity> {
        const where: Prisma.UserLoginWhereUniqueInput = {
            ...RepositoryUserLoginsFilterFactory.refreshToken(refreshToken),
        };

        const session = await this.repositoryUserLoginsRepository.findUnique(where);
        const accessToken = await this.tokensService.getAccessToken(
            session.id,
            session.roles,
            true
        );

        const newRefreshToken = await this.tokensService.generateAndSaveNewUserRefreshToken({
            userId: session.userId,
            roles: session.roles,
        });

        const cookieMaxAge = this.tokensService.getCookieMaxAge(false);

        res.cookie("refreshToken", newRefreshToken, {
            maxAge: cookieMaxAge,
            httpOnly: true,
            sameSite: "lax",
            domain: process.env.COOKIE_DOMAIN,
        });

        return new AccessTokenEntity({ accessToken: accessToken });
    }
}
