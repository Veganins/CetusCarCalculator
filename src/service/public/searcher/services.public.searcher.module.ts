import { Module } from "@nestjs/common";
import { RepositorySearcherModule } from "src/repositories/Public/Auth/searcher/repository.searcher.module";
import { ServisesPublicSearcherServise } from "./services.public.searcher.service";

@Module({
    imports: [RepositorySearcherModule],
    providers: [ServisesPublicSearcherServise],
    exports: [ServisesPublicSearcherServise],
})
export class ServisesPublicSearcherModule {}
