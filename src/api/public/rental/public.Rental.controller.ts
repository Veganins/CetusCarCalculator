import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { ServisesPublicRentalServise } from "src/service/public/rental/services.public.rental.service";
import { RentalDto } from "./dto/public.rental.dto";
import { GetCurrentUserId } from "src/common/decorator/getCurrentUserId.decorator";

@Controller("rental")
@ApiTags("Rental")
export class PublicRentalController {
    constructor(private addRentalService: ServisesPublicRentalServise) {}
    @ApiOperation({ summary: "rent a car" })
    @Post("/rent-car")
    @HttpCode(HttpStatus.CREATED)
    async Rental(@Body() rentalData: RentalDto, @GetCurrentUserId() userId: number) {
        return await this.addRentalService.rent(userId, rentalData);
    }
}
