import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { ServicesAuthModule } from "src/service/auth/services.auth.module";
import { AuthController } from "./auth.controller";

@Module({
    imports: [ServicesAuthModule, JwtModule.register({})],
    controllers: [AuthController],
})
export class AuthModule {}
