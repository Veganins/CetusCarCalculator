import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import differenceInCalendarYears from "date-fns/esm/fp/differenceInCalendarYears/index.js";
import { RepositoryUsersFilterFactory } from "src/repositories/users/repository.users.filterFactory";
import { RepositoryUsersRepository } from "src/repositories/users/repository.users.repository";
import { EmailNotUnique } from "./errors/400/emailNotUnique.error";
import { PasswordsNotMatch } from "./errors/400/passwordsNotMatch.error";

@Injectable()
export class ServicesAuthValidator {
    constructor(private readonly usersRepository: RepositoryUsersRepository) {}
    passwordValidatorErrorHandler(password: string, confirmpassword: string) {
        if (password !== confirmpassword) throw new PasswordsNotMatch();
    }
    async emailValidatorEmailHandler(email: string) {
        const where: Prisma.UserWhereUniqueInput = {
            ...RepositoryUsersFilterFactory.email(email),
        };
        const userWithSameEmail = await this.usersRepository.count(where);
        if (userWithSameEmail > 0) throw new EmailNotUnique();
    }
    // birthDateValidatorErrorHandler(birthDate: Date) {

    //     if (differenceInCalendarYears(Date.now(), birthDate)) throw new PasswordsNotMatch();
    // }
}
