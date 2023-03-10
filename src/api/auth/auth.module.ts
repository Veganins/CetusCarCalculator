import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { AuthServise } from "./auth.servise";
import { JwtStrategy } from "./strategy";
@Module({
    imports: [JwtModule.register({})],
    controllers: [AuthController],
    providers: [AuthServise, JwtStrategy],
})
export class AuthModule {}
