import { Module } from "@nestjs/common";
import { RepositoryCarRepository } from "./repository.car.Repository";
@Module({
    providers: [RepositoryCarRepository],
    exports: [RepositoryCarRepository],
})
export class RepositoryCarModule {}
