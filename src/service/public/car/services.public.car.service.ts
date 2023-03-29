import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { CarDto } from "src/api/public/car/dto/public.carPublic.dto";
import { RepositoryCarRepository } from "src/repositories/Public/Car/repository.car.Repository";
import { RepositoryCarDataFactory } from "src/repositories/Public/Car/repository.car.dataFactory";

@Injectable()
export class ServisesPublicCarServise {
    constructor(private readonly carRepository: RepositoryCarRepository) {}
    async addCar(carData: CarDto): Promise<void> {
        const {
            model,
            carMileage,
            dayRentalPrice,
            fuelConsumption,
            startrentalDate,
            overRentalDate,
        } = carData;
        const modelId = await this.carRepository.findCarModel(model);

        const createCarData: Prisma.CarCreateInput = {
            ...RepositoryCarDataFactory.carMileage(carMileage),
            ...RepositoryCarDataFactory.dayRentalPrice(dayRentalPrice),
            ...RepositoryCarDataFactory.fuelConsumption(fuelConsumption),
            ...RepositoryCarDataFactory.startrentalDate(startrentalDate),
            ...RepositoryCarDataFactory.overRentalDate(overRentalDate),
            ...RepositoryCarDataFactory.modelId(modelId.id),
            ...RepositoryCarDataFactory.setcarStatusToAVAILABLE(),
        };

        await this.carRepository.create(createCarData);
    }
}
