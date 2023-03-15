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
}
