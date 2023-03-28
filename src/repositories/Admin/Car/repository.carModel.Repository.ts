import { CarModel, Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

export class RepositoryCarModelRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(data: Prisma.CarModelCreateInput): Promise<CarModel> {
        return await this.prisma.carModel.create({ data });
    }
}
