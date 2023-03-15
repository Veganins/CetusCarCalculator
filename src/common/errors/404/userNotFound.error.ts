import { NotFoundException } from "@nestjs/common";

export class UserNotFound extends NotFoundException {
    constructor() {
        super("nie znaleziono uzytkownika");
    }
}
