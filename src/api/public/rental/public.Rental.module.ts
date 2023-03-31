import { Module } from "@nestjs/common";
import { PublicRentalController } from "./public.Rental.controller";
import { ServisesPublicRentalModule } from "src/service/public/rental/services.public.rental.module";

@Module({
    imports: [ServisesPublicRentalModule],
    controllers: [PublicRentalController],
})
export class PublicRentalModule {}
