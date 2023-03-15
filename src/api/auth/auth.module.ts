import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { ServicesAuthModule } from "src/service/auth/services.auth.module";
import { AuthController } from "./auth.controller";
import { JwtStrategy } from "./strategy";

@Module({
    imports: [ServicesAuthModule, JwtModule.register({})],
    controllers: [AuthController],
    providers: [JwtStrategy],
})
export class AuthModule {}
