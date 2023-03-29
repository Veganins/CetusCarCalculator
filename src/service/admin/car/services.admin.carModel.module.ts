import { Module } from "@nestjs/common";
import { RepositoryCarModelModule } from "src/repositories/Admin/Car/repository.carModel.module";
import { ServisesAdminCarModelServise } from "./services.admin.carModel.service";
import { ServicesAdminCarModelValidator } from "./services.admin.carModel.validator";

@Module({
    imports: [RepositoryCarModelModule],
    providers: [ServisesAdminCarModelServise, ServicesAdminCarModelValidator],
    exports: [ServisesAdminCarModelServise],
})
export class ServisesAdminCarModule {}
