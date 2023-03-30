import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class RentalDto {
    @ApiProperty()
    @IsString()
    idcar: number;
}
