import { BadRequestException } from "@nestjs/common";

export class ModelNotUnique extends BadRequestException {
    constructor() {
        super("Istnieje już taki model");
    }
}
