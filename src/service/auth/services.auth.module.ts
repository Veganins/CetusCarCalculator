import { Module } from "@nestjs/common";
import { RepositoryUsersRepository } from "src/repositories/users/repository.users.repository";
import { ServisesAuthServise } from "./services.auth.service";
import { ServicesAuthValidator } from "./services.auth.validator";

@Module({
    imports: [RepositoryUsersRepository],
    providers: [ServisesAuthServise, ServicesAuthValidator],
    exports: [ServisesAuthServise],
})
export class ServicesAuthModule {}
