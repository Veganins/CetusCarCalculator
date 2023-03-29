import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AdminCarModelModule } from "./Admin/Car/admin.CarModel.module";
import { AuthUserModule } from "./public/auth/auth.user.module";
import { AtStrategy } from "./public/auth/strategies";
import { PublicCarModule } from "./public/car/public.Car.module";

@Module({
    imports: [JwtModule.register({}), AuthUserModule, AdminCarModelModule, PublicCarModule],
    providers: [AtStrategy],
})
export class ApiModule {}
