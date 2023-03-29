import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { ServisesPublicCarServise } from "src/service/public/car/services.public.car.service";
import { CarDto } from "./dto/public.carPublic.dto";

@Controller("cars")
@ApiTags("Cars")
export class PublicCarsController {
    constructor(private addCarService: ServisesPublicCarServise) {}
    @ApiOperation({ summary: "Create new Cars" })
    @Post("/New-Car")
    @HttpCode(HttpStatus.CREATED)
    async Car(@Body() carData: CarDto): Promise<void> {
        await this.addCarService.addCar(carData);
    }
}
