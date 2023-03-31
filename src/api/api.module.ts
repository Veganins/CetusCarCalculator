import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AdminCarModelModule } from "./Admin/Car/admin.CarModel.module";
import { AuthUserModule } from "./public/auth/auth.user.module";
import { AtStrategy } from "./public/auth/strategies";
import { PublicCarModule } from "./public/car/public.Car.module";
import { PublicSearcherModule } from "./public/searcher/public.Searcher.module";
import { PublicRentalModule } from "./public/rental/public.Rental.module";

@Module({
    imports: [
        JwtModule.register({}),
        AuthUserModule,
        AdminCarModelModule,
        PublicCarModule,
        PublicSearcherModule,
        PublicRentalModule,
    ],
    providers: [AtStrategy],
})
export class ApiModule {}
