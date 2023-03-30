import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { Car } from "@prisma/client";
import { ServisesPublicSearcherServise } from "src/service/public/searcher/services.public.searcher.service";
import { SearcherDto } from "./dto/public.carPublic.dto";
import { CarRentEntity } from "./entity/public.carRent.entity";

@Controller("searcher")
@ApiTags("Searcher")
export class PublicSearcherController {
    constructor(private searcherCarModuleService: ServisesPublicSearcherServise) {}
    @ApiOperation({ summary: "Search the car" })
    @Post("/searcher-car")
    async search(@Body() searchData: SearcherDto): Promise<CarRentEntity[]> {
        return await this.searcherCarModuleService.search(searchData);
    }
}
