import { Module } from "@nestjs/common";
import { RepositoryCarModelRepository } from "./repository.carModel.Repository";

@Module({
    providers: [RepositoryCarModelRepository],
    exports: [RepositoryCarModelRepository],
})
export class RepositoryCarModelModule {}
