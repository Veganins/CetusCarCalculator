import { Prisma } from "@prisma/client";

export class RepositoryUsersFilterFactory {
    static email(email: string): Prisma.UserWhereUniqueInput {
        return {
            email: email,
        };
    }
}
