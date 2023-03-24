import { Prisma } from "@prisma/client";
import { isString } from "class-validator";
import { InvalidRefreshToken } from "src/common/errors/404/invalidRefreshToken.error";

export class RepositoryUserLoginsFilterFactory {
    static refreshToken(refreshToken: string): Prisma.UserLoginWhereUniqueInput {
        if (!isString(refreshToken)) throw new InvalidRefreshToken();

        return {
            refreshToken: refreshToken,
        };
    }
}
