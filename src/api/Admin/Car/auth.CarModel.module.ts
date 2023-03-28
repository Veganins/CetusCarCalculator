import { Module } from "@nestjs/common";
import { ServisesAddCarModule } from "src/service/admin/car/services.add.car.module";
import { AuthCarModelController } from "./auth.CarModel.controller";

@Module({
    imports: [ServisesAddCarModule],
    controllers: [AuthCarModelController],
})
export class AuthCarModelModule {}
