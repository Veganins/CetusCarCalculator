import { Module } from "@nestjs/common";
import { ServicesAuthModule } from "src/service/auth/services.auth.module";
import { AuthUserController } from "./auth.user.controller";

@Module({
    imports: [ServicesAuthModule],
    controllers: [AuthUserController],
})
export class AuthUserModule {}
