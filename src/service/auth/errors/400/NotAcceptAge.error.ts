import { BadRequestException } from "@nestjs/common";

export class NotAcceptAge extends BadRequestException {
    constructor() {
        super("Musisz mieć powyżej 18 lat");
    }
}
