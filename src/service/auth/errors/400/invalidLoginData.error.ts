import { BadRequestException } from "@nestjs/common";

export class InvalidSignInData extends BadRequestException {
    constructor() {
        super("Niepoprawne dane logowania");
    }
}
