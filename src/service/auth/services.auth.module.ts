import { Module } from "@nestjs/common";
import { RepositoryUsersModule } from "src/repositories/users/repository.users.module";
import { ServisesAuthServise } from "./services.auth.service";
import { ServicesAuthValidator } from "./services.auth.validator";

@Module({
    imports: [RepositoryUsersModule],
    providers: [ServisesAuthServise, ServicesAuthValidator],
    exports: [ServisesAuthServise],
})
export class ServicesAuthModule {}
