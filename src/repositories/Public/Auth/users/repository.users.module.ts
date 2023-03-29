import { Module } from "@nestjs/common";
import { RepositoryUsersRepository } from "./repository.users.repository";

@Module({
    providers: [RepositoryUsersRepository],
    exports: [RepositoryUsersRepository],
})
export class RepositoryUsersModule {}
