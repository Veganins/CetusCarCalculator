import { Injectable } from "@nestjs/common";
import { Car, CarModel, Prisma, Rental, User } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
@Injectable()
export class RepositoryRentalRepository {
    constructor(private prisma: PrismaService) {}

    async create(data: Prisma.RentalCreateInput): Promise<Rental> {
        return await this.prisma.rental.create({ data });
    }
    async getCar(carId: number): Promise<Car> {
        return await this.prisma.car.findFirst({
            where: {
                id: carId,
            },
        });
    }
    async getCarModel(carModelId: number): Promise<CarModel> {
        return await this.prisma.carModel.findFirst({
            where: {
                id: carModelId,
            },
        });
    }
    async getUser(userId: number): Promise<User> {
        return await this.prisma.user.findFirst({
            where: {
                id: userId,
            },
        });
    }
}
