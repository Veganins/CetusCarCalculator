import { Prisma } from "@Prisma/client";

export class RepositoryUserLoginsDataFactory {
    static refreshToken(token: string): Pick<Prisma.UserLoginCreateInput, "refreshToken"> {
        return {
            refreshToken: token,
        };
    }

    static expirationDate(expires: Date): Pick<Prisma.UserLoginCreateInput, "expires"> {
        return {
            expires,
        };
    }

    static Role(roles: string): Pick<Prisma.UserLoginCreateInput, "roles"> {
        return {
            roles,
        };
    }

    static User(userId: number): Pick<Prisma.UserLoginCreateInput, "users"> {
        return {
            users: {
                connect: {
                    id: userId,
                },
            },
        };
    }
}
