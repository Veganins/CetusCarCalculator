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
    static phoneNumber(phoneNumber: string | null): Pick<Prisma.UserCreateInput, "phoneNumber"> {
        return {
            phoneNumber,
        };
    }
    static address(address: string | null): Pick<Prisma.UserCreateInput, "address"> {
        return {
            address,
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
