import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthCarModelModule } from "./Admin/Car/auth.CarModel.module";
import { AuthUserModule } from "./public/auth/auth.user.module";
import { AtStrategy } from "./public/auth/strategies";

@Module({
    imports: [JwtModule.register({}), AuthUserModule, AuthCarModelModule],
    providers: [AtStrategy],
})
export class ApiModule {}
