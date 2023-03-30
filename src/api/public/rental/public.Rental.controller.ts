import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { Rental } from "@prisma/client";
import { ServisesPublicRentalServise } from "src/service/public/rental/services.public.rental.service";
import { RentalDto } from "./dto/public.rental.dto";

@Controller("rental")
@ApiTags("Rental")
export class PublicRentalController {
    constructor(private addRentalService: ServisesPublicRentalServise) {}
    @ApiOperation({ summary: "rent a car" })
    @Post("/rent-car")
    @HttpCode(HttpStatus.CREATED)
    async Car(@Body() rentalData: RentalDto): Promise<Rental> {
        return await this.addRentalService.rent(rentalData);
    }
}
