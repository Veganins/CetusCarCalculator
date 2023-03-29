import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { compareAsc, differenceInCalendarDays, differenceInDays } from "date-fns";
import * as argon from "argon2";
import { PasswordsNotMatch } from "./errors/400/passwordsNotMatch.error";
import { EmailNotUnique } from "./errors/400/emailNotUnique.error";
import { NotAcceptAge } from "./errors/400/NotAcceptAge.error";
import { dateIsExpired } from "./errors/400/dateIsExpired.error";
import { InvalidSignInData } from "./errors/400/invalidLoginData.error";
import { RepositoryUsersFilterFactory } from "src/repositories/Public/Auth/users/repository.users.filterFactory";
import { RepositoryUsersRepository } from "src/repositories/Public/Auth/users/repository.users.repository";
@Injectable()
export class ServicesAuthValidator {
    constructor(private readonly usersRepository: RepositoryUsersRepository) {}
    passwordValidatorErrorHandler(password: string, confirmpassword: string) {
        if (password !== confirmpassword) throw new PasswordsNotMatch();
    }
    async emailValidatorErrorHandler(email: string) {
        const where: Prisma.UserWhereUniqueInput = {
            ...RepositoryUsersFilterFactory.email(email),
        };
        const userWithSameEmail = await this.usersRepository.count(where);
        if (userWithSameEmail > 0) throw new EmailNotUnique();
    }
    birthDateValidatorErrorHandler(birthDate: Date) {
        if (birthDate == null) {
            return;
        }
        const dayInYears = differenceInCalendarDays(Date.now(), birthDate);
        if (6574 >= dayInYears) throw new NotAcceptAge();
    }
    expirationDateDrivingLicenseValidatorErrorHandler(expirationDateDrivingLicense: Date) {
        if (expirationDateDrivingLicense == null) {
            return;
        }
        if (compareAsc(Date.now(), expirationDateDrivingLicense)) {
            if (differenceInDays(Date.now(), expirationDateDrivingLicense) > 0)
                throw new dateIsExpired();
        } else {
            throw new dateIsExpired();
        }
    }
    async checkIfPasswordsMatch(hashedUserPassword: string, plainGivenPassword: string) {
        const passwordMatch = await argon.verify(hashedUserPassword, plainGivenPassword);
        if (!passwordMatch) throw new InvalidSignInData();
    }
}
