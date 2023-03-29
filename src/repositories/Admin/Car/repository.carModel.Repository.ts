import { Injectable, Logger } from "@nestjs/common";
import { CarModel, Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
@Injectable()
export class RepositoryCarModelRepository {
    constructor(private prisma: PrismaService) {}

    async create(data: Prisma.CarModelCreateInput): Promise<CarModel> {
        return await this.prisma.carModel.create({ data });
    }
    async count(where: Prisma.UserWhereInput): Promise<number> {
        const count = await this.prisma.carModel.count({
            where,
            select: {
                _all: true,
            },
        });
        return count._all;
    }
}
