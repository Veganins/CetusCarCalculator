import { NotFoundException } from "@nestjs/common";

export class InvalidRefreshToken extends NotFoundException {
    constructor() {
        super("Niepoprawny refresh token.");
    }
}
