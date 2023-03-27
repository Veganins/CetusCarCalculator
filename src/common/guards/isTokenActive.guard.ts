import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { isNullOrUndefined } from "is-what";
import { JwtPayload } from "src/types/jwtPayload.type";
import { AuthNeedToGetRefreshTokenError } from "../errors/401/auth.needToGetRefreshToken.error";
import { AuthRefreshTokenExpiredError } from "../errors/401/auth.refreshTokenExpired.error";

@Injectable()
export class isTokenActiveGuard implements CanActivate {
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const user = request.user as JwtPayload;

        const isUserLogIn = !isNullOrUndefined(user);
        if (!isUserLogIn) return true;

        const now = new Date();
        const refreshTokenExpirationTime = new Date(user.refreshTokenExpirationDate);
        const sessionExpirationTime = new Date(user.sessionExpirationDate);

        if (now > sessionExpirationTime && now < refreshTokenExpirationTime)
            throw new AuthNeedToGetRefreshTokenError();
        else if (now > refreshTokenExpirationTime) throw new AuthRefreshTokenExpiredError();

        return true;
    }
}
