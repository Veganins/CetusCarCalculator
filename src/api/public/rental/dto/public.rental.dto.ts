import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber } from "class-validator";

export class RentalDto {
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    idcar: number;
    @ApiProperty()
    @IsDate()
    @IsNotEmpty()
    @Type(() => Date)
    dateStartRental: Date;
    @ApiProperty()
    @IsDate()
    @IsNotEmpty()
    @Type(() => Date)
    dateEndRental: Date;
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    mileageRange: number;
}
