import { Module } from "@nestjs/common";
import { ServisesAdminCarModule } from "src/service/admin/car/services.admin.carModel.module";
import { AdminCarModelController } from "./admin.CarModel.controller";

@Module({
    imports: [ServisesAdminCarModule],
    controllers: [AdminCarModelController],
})
export class AdminCarModelModule {}
