import { Injectable } from "@nestjs/common";
import { Prisma, User } from "@prisma/client";
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
}
