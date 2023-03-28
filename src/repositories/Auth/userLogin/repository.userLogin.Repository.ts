import { Injectable } from "@nestjs/common";
import { Prisma, UserLogin } from "@Prisma/client";
import { isNullOrUndefined } from "is-what";
import { InvalidRefreshToken } from "src/common/errors/404/invalidRefreshToken.error";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class RepositoryUserLoginsRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(data: Prisma.UserLoginCreateInput): Promise<UserLogin> {
        return await this.prisma.userLogin.create({ data });
    }
    async findUnique(where: Prisma.UserLoginWhereUniqueInput) {
        const userLoginSession = await this.prisma.userLogin.findUnique({
            where,

            select: {
                id: true,
                userId: true,
                roles: true,
            },
        });
        if (isNullOrUndefined(userLoginSession)) throw new InvalidRefreshToken();
        return userLoginSession;
    }
    async count(where: Prisma.UserLoginWhereInput): Promise<number> {
        const count = await this.prisma.userLogin.count({
            where,
        });
        return count;
    }
    async assertIfResourceDontExist(where: Prisma.UserLoginWhereInput): Promise<void> {
        const count = await this.count(where);

        if (count === 0) throw new InvalidRefreshToken();
    }
    async delete(where: Prisma.UserLoginWhereUniqueInput): Promise<void> {
        await this.assertIfResourceDontExist(where);

        await this.prisma.userLogin.delete({ where });
    }
}
