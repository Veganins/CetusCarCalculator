import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { RepositoryCarModelRepository } from "src/repositories/Admin/Car/repository.carModel.Repository";
import { ModelNotUnique } from "./errors/400/ModelNotUnique.error";
@Injectable()
export class ServicesAdminCarModelValidator {
    constructor(private readonly carModelRepository: RepositoryCarModelRepository) {}

    async modelValidatorErrorHandler(model: string) {
        const where: Prisma.CarModelWhereInput = {
            model,
        };
        const carModelWithSameModel = await this.carModelRepository.count(where);
        if (carModelWithSameModel > 0) throw new ModelNotUnique();
    }
}
