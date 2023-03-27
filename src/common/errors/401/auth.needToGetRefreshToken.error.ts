import { UnauthorizedException } from "@nestjs/common";

export class AuthNeedToGetRefreshTokenError extends UnauthorizedException {
    constructor() {
        super(`Token wygasł - poproś o refresh token`);
    }
}
