import { Prisma } from "@prisma/client";
import { ROLES_IDS_ENUM } from "src/seed/init/roles/idsEnums/rolesIds.enum";

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
    static setRoleToNormalUser(): Pick<Prisma.UserCreateInput, "roles"> {
        return {
            roles: "USER",
        };
    }
}
