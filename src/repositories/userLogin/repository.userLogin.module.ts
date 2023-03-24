import { Module } from "@nestjs/common";
import { RepositoryUserLoginsRepository } from "./repository.userLogin.Repository";

@Module({
    providers: [RepositoryUserLoginsRepository],
    exports: [RepositoryUserLoginsRepository],
})
export class RepositoryUserLoginsModule {}
