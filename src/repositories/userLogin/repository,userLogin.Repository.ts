import { Injectable } from "@nestjs/common";
import { Prisma, UserLogin } from "@Prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class RepositoryUserLoginsRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(data: Prisma.UserLoginCreateInput): Promise<UserLogin> {
        return await this.prisma.userLogin.create({ data });
    }
}
