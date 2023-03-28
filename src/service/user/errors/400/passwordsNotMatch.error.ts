import { BadRequestException } from "@nestjs/common";

export class PasswordsNotMatch extends BadRequestException {
    constructor() {
        super("Hasla musza byc jednakowe");
    }
}
