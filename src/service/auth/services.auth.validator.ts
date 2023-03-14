import { Injectable } from "@nestjs/common";
import { RepositoryUsersRepository } from "src/repositories/users/repository.users.repository";
import { PasswordsNotMatch } from "./errors/400/passwordsNotMatch.error";

@Injectable()
export class ServicesAuthValidator {
    constructor(private readonly usersRepository: RepositoryUsersRepository) {}
    passwordValidatorErrorHandler(password: string, confirmpassword: string) {
        if (password !== confirmpassword) throw new PasswordsNotMatch();
    }
}
