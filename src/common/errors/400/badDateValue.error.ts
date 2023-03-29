import { BadRequestException } from "@nestjs/common";

export class BadDateValueError extends BadRequestException {
    constructor(currentEnum: string) {
        super(`${currentEnum} nie jest poprawnym formatem daty`);
    }
}
