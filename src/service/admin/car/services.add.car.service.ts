import { Injectable } from "@nestjs/common";
import { CarModelDto } from "src/api/Admin/Car/dto/auth.carModelAdd.dto";

@Injectable()
export class ServisesAddCarServise {
    async addCarModel(carModelData: CarModelDto): Promise<void> {
        const { priceCategory, barnd, model } = carModelData;
        console.log(priceCategory);
    }
}
