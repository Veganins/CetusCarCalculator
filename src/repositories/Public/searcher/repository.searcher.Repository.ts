import { Injectable, Logger } from "@nestjs/common";
import { Car, CarModel, Prisma } from "@prisma/client";
import { CarRentEntity } from "src/api/public/searcher/entity/public.carRent.entity";
import { PrismaService } from "src/prisma/prisma.service";
@Injectable()
export class RepositorySearcherRepository {
    constructor(private prisma: PrismaService) {}
    async findCars(
        maxcarMileage: number,
        maxdayRentalPrice: number,
        maxfuelConsumption: number,
        model: string
    ): Promise<CarRentEntity> {
        const findModel = await this.prisma.carModel.findFirst({
            where: {
                model,
            },
        });
        const findsCar = await this.prisma.car.findMany({
            where: {
                carMileage: { lt: maxcarMileage },
                dayRentalPrice: { lt: maxdayRentalPrice },
                fuelConsumption: { lt: maxfuelConsumption },
                carModelId: findModel.id,
            },
        });

        return new CarRentEntity({
            car: findsCar,
            priceCategory: findModel.priceCategory,
            brand: findModel.barnd,
            model: findModel.model,
        });
    }
}
