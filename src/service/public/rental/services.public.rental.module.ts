import { Module } from "@nestjs/common";
import { RepositoryRentalModule } from "src/repositories/Public/rental/repository.rental.module";
import { ServisesPublicRentalServise } from "./services.public.rental.service";

@Module({
    imports: [RepositoryRentalModule],
    providers: [ServisesPublicRentalServise],
    exports: [ServisesPublicRentalServise],
})
export class ServisesPublicRentalModule {}
