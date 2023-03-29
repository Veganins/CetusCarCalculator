import { Injectable } from "@nestjs/common";
import { Car, CarModel, Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
@Injectable()
export class RepositoryCarRepository {
    constructor(private prisma: PrismaService) {}

    async create(data: Prisma.CarCreateInput): Promise<Car> {
        return await this.prisma.car.create({ data });
    }
    async findCarModel(model: string): Promise<CarModel> {
        const find = await this.prisma.carModel.findFirst({
            where: { model },
        });
        return find;
    }
}
