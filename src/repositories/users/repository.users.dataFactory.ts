import { Prisma } from "@prisma/client";

export class RepositoryUsersDataFactory {
    static password(password: string): Pick<Prisma.UserCreateInput, "password"> {
        return {
            password,
        };
    }

    static email(email: string): Pick<Prisma.UserCreateInput, "email"> {
        return {
            email,
        };
    }
    static birthDate(birthDate: Date): Pick<Prisma.UserCreateInput, "birthDate"> {
        return {
            birthDate,
        };
    }
    static expirationDateDrivingLicense(
        expirationDateDrivingLicense: Date
    ): Pick<Prisma.UserCreateInput, "expirationDateDrivingLicense"> {
        return {
            expirationDateDrivingLicense,
        };
    }
}
