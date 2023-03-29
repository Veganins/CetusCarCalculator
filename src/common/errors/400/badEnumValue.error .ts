import { BadRequestException } from "@nestjs/common";

export class BadEnumValueError extends BadRequestException {
    constructor(currentDate: string) {
        super(`${currentDate} nie jest poprawnym formatem Enuma`);
    }
}
