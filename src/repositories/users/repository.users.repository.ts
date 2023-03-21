import { All, Injectable } from "@nestjs/common";
import { Prisma, ROLE, User } from "@prisma/client";
import { isNullOrUndefined } from "is-what";
import { UserNotFound } from "src/common/errors/404/userNotFound.error";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class RepositoryUsersRepository {
    constructor(private prisma: PrismaService) {}
    async create(data: Prisma.UserCreateInput): Promise<User> {
        console.log(data);

        return await this.prisma.user.create({ data });
    }

    async count(where: Prisma.UserWhereInput): Promise<number> {
        const count = await this.prisma.user.count({
            where,
            select: {
                _all: true,
            },
        });
        return count._all;
    }
    async findUnique(where: Prisma.UserWhereUniqueInput) {
        const user = await this.prisma.user.findUnique({
            where,
            select: {
                id: true,
                password: true,
                roles: true,
            },
        });
        if (isNullOrUndefined(user)) throw new UserNotFound();
        return user;
    }
}
