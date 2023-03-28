import { BadRequestException } from "@nestjs/common";

export class EmailNotUnique extends BadRequestException {
    constructor() {
        super("Email został juz uzyty");
    }
}
