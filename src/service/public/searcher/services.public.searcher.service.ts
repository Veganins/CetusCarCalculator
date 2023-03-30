import { Injectable } from "@nestjs/common";
import { Car, Prisma } from "@prisma/client";
import { SearcherDto } from "src/api/public/searcher/dto/public.carPublic.dto";
import { CarRentEntity } from "src/api/public/searcher/entity/public.carRent.entity";
import { RepositorySearcherRepository } from "src/repositories/Public/searcher/repository.searcher.Repository";

@Injectable()
export class ServisesPublicSearcherServise {
    constructor(private readonly searcherRepository: RepositorySearcherRepository) {}
    async search(searcherData: SearcherDto): Promise<CarRentEntity> {
        const { model, maxcarMileage, maxdayRentalPrice, maxfuelConsumption } = searcherData;

        const cars = await this.searcherRepository.findCars(
            maxcarMileage,
            maxdayRentalPrice,
            maxfuelConsumption,
            model
        );

        return cars;
    }
}
