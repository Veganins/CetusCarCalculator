import { Module } from "@nestjs/common";
import { ServisesPublicSearcherModule } from "src/service/public/searcher/services.public.searcher.module";
import { PublicSearcherController } from "./public.Searcher.controller";

@Module({
    imports: [ServisesPublicSearcherModule],
    controllers: [PublicSearcherController],
})
export class PublicSearcherModule {}
