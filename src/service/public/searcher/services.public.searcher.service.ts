import { Injectable } from "@nestjs/common";
import { Car, Prisma } from "@prisma/client";
import { SearcherDto } from "src/api/public/searcher/dto/public.carPublic.dto";
import { CarRentEntity } from "src/api/public/searcher/entity/public.carRent.entity";
import { RepositorySearcherRepository } from "src/repositories/Public/Auth/searcher/repository.searcher.Repository";

@Injectable()
export class ServisesPublicSearcherServise {
    constructor(private readonly searcherRepository: RepositorySearcherRepository) {}
    async search(searcherData: SearcherDto): Promise<CarRentEntity[]> {
        const { model, brand, maxcarMileage, maxdayRentalPrice, maxfuelConsumption } = searcherData;

        const cars = await this.searcherRepository.findCars(
            maxcarMileage,
            maxdayRentalPrice,
            maxfuelConsumption,
            model,
            brand
        );
        // for (let x = 0; x < cars.length; x++) {
        //     const models = await this.searcherRepository.findModel(cars[x].carModelId);
        //     let a={
        //         cars[x].id;
        //         cars[x].carMileage;
        //         cars[x].dayRentalPrice;
        //         cars[x].fuelConsumption;
        //         cars[x].startrentalDate;
        //         cars[x].overRentalDate;
        //         cars[x].carStatus;
        //         models.model;
        //         models.barnd;
        //         models.priceCategory;
        //     }
        // }
        return new CarRentEntity({});
    }
}
