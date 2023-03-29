import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CarDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    model: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    carMileage: number;
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    dayRentalPrice: number;
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    fuelConsumption: number;
    @ApiProperty()
    @IsDate()
    @IsNotEmpty()
    @Type(() => Date)
    startrentalDate: Date;
    @ApiProperty()
    @IsDate()
    @IsNotEmpty()
    @Type(() => Date)
    overRentalDate: Date;
}
