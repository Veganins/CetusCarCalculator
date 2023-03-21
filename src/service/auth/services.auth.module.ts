import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { RepositoryUserLoginsModule } from "src/repositories/userLogin/repository.userLogin.module";
import { RepositoryUsersModule } from "src/repositories/users/repository.users.module";
import { ServisesAuthServise } from "./services.auth.service";
import { ServicesAuthValidator } from "./services.auth.validator";
import { ServicesAuthTokenService } from "./servises.auth.tokens.service";

@Module({
    imports: [RepositoryUsersModule, RepositoryUserLoginsModule, JwtModule.register({})],
    providers: [ServisesAuthServise, ServicesAuthValidator, ServicesAuthTokenService],
    exports: [ServisesAuthServise],
})
export class ServicesAuthModule {}
