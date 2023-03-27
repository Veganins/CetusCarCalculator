import { UnauthorizedException } from "@nestjs/common";

export class AuthRefreshTokenExpiredError extends UnauthorizedException {
    constructor() {
        super(`Refresh Token wygasł - Zaloguj się ponownie`);
    }
}
