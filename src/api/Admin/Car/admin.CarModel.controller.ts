import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { ServisesAdminCarModelServise } from "src/service/admin/car/services.admin.carModel.service";
import { CarModelDto } from "./dto/admin.carModelAdmin.dto";

@Controller("admin")
@ApiTags("Admin")
export class AdminCarModelController {
    constructor(private authCarService: ServisesAdminCarModelServise) {}
    @ApiOperation({ summary: "Create Car Model" })
    @Post("/add-car-model")
    @HttpCode(HttpStatus.CREATED)
    async CarModel(@Body() carModelData: CarModelDto): Promise<void> {
        await this.authCarService.addCarModel(carModelData);
    }
}
