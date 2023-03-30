import { Module } from "@nestjs/common";
import { RepositoryRentalRepository } from "./repository.rental.Repository";

@Module({
    providers: [RepositoryRentalRepository],
    exports: [RepositoryRentalRepository],
})
export class RepositoryRentalModule {}
