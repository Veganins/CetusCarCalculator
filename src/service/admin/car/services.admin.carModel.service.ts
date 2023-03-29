import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { CarModelDto } from "src/api/Admin/Car/dto/admin.carModelAdmin.dto";
import { RepositoryCarModelDataFactory } from "src/repositories/Admin/Car/repository.carModel.dataFactory";
import { RepositoryCarModelRepository } from "src/repositories/Admin/Car/repository.carModel.Repository";

@Injectable()
export class ServisesAdminCarServise {
    constructor(private readonly carModelRepository: RepositoryCarModelRepository) {}
    async addCarModel(carModelData: CarModelDto): Promise<void> {
        const { priceCategory, barnd, model } = carModelData;
        const createCarModelData: Prisma.CarModelCreateInput = {
            ...RepositoryCarModelDataFactory.model(model),
            ...RepositoryCarModelDataFactory.barnd(barnd),
            ...RepositoryCarModelDataFactory.priceCategory(priceCategory),
        };

        await this.carModelRepository.create(createCarModelData);
    }
}
