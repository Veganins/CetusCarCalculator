import { Module } from "@nestjs/common";
import { RepositoryCarModelModule } from "src/repositories/Admin/Car/repository.carModel.module";
import { ServisesAdminCarServise } from "./services.admin.carModel.service";

@Module({
    imports: [RepositoryCarModelModule],
    providers: [ServisesAdminCarServise],
    exports: [ServisesAdminCarServise],
})
export class ServisesAdminCarModule {}
