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
    static birthDate(birthDate: Date | null): Pick<Prisma.UserCreateInput, "birthDate"> {
        return {
            birthDate,
        };
    }
    static expirationDateDrivingLicense(
        expirationDateDrivingLicense: Date | null
    ): Pick<Prisma.UserCreateInput, "expirationDateDrivingLicense"> {
        return {
            expirationDateDrivingLicense,
        };
    }
    static setRoleToNormalUser(): Pick<Prisma.UserCreateInput, "roles"> {
        return {
            roles: "USER",
        };
    }
}
