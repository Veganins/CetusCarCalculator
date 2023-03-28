import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { ServisesAddCarServise } from "src/service/admin/car/services.add.car.service";
import { CarModelDto } from "./dto/auth.carModelAdd.dto";

@Controller("admin")
@ApiTags("Admin")
export class AuthCarModelController {
    constructor(private authCarService: ServisesAddCarServise) {}
    @ApiOperation({ summary: "Create Car Model" })
    @Post("/addCarModule")
    @HttpCode(HttpStatus.CREATED)
    async CarModule(@Body() carModelData: CarModelDto): Promise<void> {
        await this.authCarService.addCarModel(carModelData);
    }
}
