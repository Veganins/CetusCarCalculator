import { BadRequestException } from "@nestjs/common";

export class dateIsExpired extends BadRequestException {
    constructor() {
        super("Data waznosci prawa jazdy wygasła");
    }
}
