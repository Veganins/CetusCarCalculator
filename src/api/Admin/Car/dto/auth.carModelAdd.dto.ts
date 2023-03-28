import { ApiProperty } from "@nestjs/swagger";
import { PRICECATEGORY } from "@prisma/client";
import { Transform } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";
import { stringToEnumTransform } from "src/common/transform/stringToEnum.Transform";

export class CarModelDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    model: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    barnd: string;
    @ApiProperty()
    @IsString()
    @Transform(stringToEnumTransform)
    priceCategory: PRICECATEGORY;
}
