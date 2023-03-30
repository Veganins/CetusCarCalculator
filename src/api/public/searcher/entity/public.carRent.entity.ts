import { ApiHideProperty, ApiProperty } from "@nestjs/swagger";
import { Car, CARSTATUS, PRICECATEGORY } from "@prisma/client";
import { Exclude, Expose } from "class-transformer";

@Exclude()
export class CarRentEntity {
    @Expose()
    @ApiProperty()
    carModel: Car[];

    // @Expose()
    // @ApiProperty()
    // id: number[];
    // @Expose()
    // @ApiProperty()
    // carMileage: number;
    // @Expose()
    // @ApiProperty()
    // dayRentalPrice: number;
    // @Expose()
    // @ApiProperty()
    // fuelConsumption: number;
    // @Expose()
    // @ApiProperty()
    // startrentalDate: Date;
    // @Expose()
    // @ApiProperty()
    // overRentalDate: Date;
    // @Expose()
    // @ApiProperty()
    // carStatus: CARSTATUS;
    @Expose()
    @ApiProperty()
    model: string;
    @Expose()
    @ApiProperty()
    brand: string;
    @Expose()
    @ApiProperty()
    priceCategory: PRICECATEGORY;

    @ApiHideProperty()
    private static readonly _type = "CarRentEntity";

    constructor(data: Omit<CarRentEntity, "_type">) {
        Object.assign(this, data);
    }
}
