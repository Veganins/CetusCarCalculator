import { BadRequestException } from "@nestjs/common";

export class BadDateValueError extends BadRequestException {
    constructor(currentDate: string) {
        super(`${currentDate} nie jest poprawnym formatem daty`);
    }
}
