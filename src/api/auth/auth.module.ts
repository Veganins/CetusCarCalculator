import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { ServisesAuthServise } from "src/service/auth/services.auth.service";
import { AuthController } from "./auth.controller";

import { JwtStrategy } from "./strategy";
@Module({
    imports: [JwtModule.register({})],
    controllers: [AuthController],
    providers: [ServisesAuthServise, JwtStrategy],
})
export class AuthModule {}
