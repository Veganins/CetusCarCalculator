import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class SearcherDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsOptional()
    @IsString()
    model: string;
    @ApiProperty()
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    brand: string;
    @ApiProperty()
    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    maxcarMileage: number;
    @ApiProperty()
    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    maxdayRentalPrice: number;
    @ApiProperty()
    @IsNotEmpty()
    @IsOptional()
    @IsNumber()
    maxfuelConsumption: number;
}
