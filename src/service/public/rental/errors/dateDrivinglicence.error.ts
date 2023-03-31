import { BadRequestException } from "@nestjs/common";

export class dateDrivingLicence extends BadRequestException {
    constructor() {
        super("Musisz mosiadać prawo jazdy więcej niż 3 lata");
    }
}
