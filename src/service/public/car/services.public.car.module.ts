import { Module } from "@nestjs/common";
import { RepositoryCarModule } from "src/repositories/Public/Car/repository.car.module";
import { ServisesPublicCarServise } from "./services.public.car.service";

@Module({
    imports: [RepositoryCarModule],
    providers: [ServisesPublicCarServise],
    exports: [ServisesPublicCarServise],
})
export class ServisesPublicCarModule {}
