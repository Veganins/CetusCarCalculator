import { NotFoundException } from "@nestjs/common";

export class UserNotFound extends NotFoundException {
    constructor() {
        super("Nie znaleziono uzytkownika");
    }
}
