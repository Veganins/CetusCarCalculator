import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthServise } from "./auth.servise";
@Module({
    controllers: [AuthController],
    providers: [AuthServise],
})
export class AuthModule {}
