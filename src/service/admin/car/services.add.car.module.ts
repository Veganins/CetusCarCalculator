import { Module } from "@nestjs/common";
import { ServisesAddCarServise } from "./services.add.car.service";

@Module({
    providers: [ServisesAddCarServise],
    exports: [ServisesAddCarServise],
})
export class ServisesAddCarModule {}
