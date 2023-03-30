import { Module } from "@nestjs/common";
import { ServisesPublicCarModule } from "src/service/public/car/services.public.car.module";
import { PublicCarsController } from "./public.Car.controller";

@Module({
    imports: [ServisesPublicCarModule],
    controllers: [PublicCarsController],
})
export class PublicCarModule {}
