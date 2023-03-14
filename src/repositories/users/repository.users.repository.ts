import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class RepositoryUsersRepository {
    constructor(private prisma: PrismaService) {}

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
