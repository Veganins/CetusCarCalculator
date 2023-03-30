import { Module } from "@nestjs/common";
import { RepositorySearcherRepository } from "./repository.searcher.Repository";

@Module({
    providers: [RepositorySearcherRepository],
    exports: [RepositorySearcherRepository],
})
export class RepositorySearcherModule {}
