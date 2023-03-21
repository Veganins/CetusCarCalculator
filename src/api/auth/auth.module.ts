import { Module } from "@nestjs/common";
import { ServicesAuthModule } from "src/service/auth/services.auth.module";
import { AuthController } from "./auth.controller";

@Module({
    imports: [ServicesAuthModule],
    controllers: [AuthController],
})
export class AuthModule {}
