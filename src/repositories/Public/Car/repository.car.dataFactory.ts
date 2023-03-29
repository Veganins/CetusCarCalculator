import { Prisma } from "@prisma/client";
export class RepositoryCarDataFactory {
    static carMileage(carMileage: number): Pick<Prisma.CarCreateInput, "carMileage"> {
        return {
            carMileage,
        };
    }
    static dayRentalPrice(dayRentalPrice: number): Pick<Prisma.CarCreateInput, "dayRentalPrice"> {
        return {
            dayRentalPrice,
        };
    }
    static fuelConsumption(
        fuelConsumption: number
    ): Pick<Prisma.CarCreateInput, "fuelConsumption"> {
        return {
            fuelConsumption,
        };
    }
    static startrentalDate(startrentalDate: Date): Pick<Prisma.CarCreateInput, "startrentalDate"> {
        return {
            startrentalDate,
        };
    }
    static overRentalDate(overRentalDate: Date): Pick<Prisma.CarCreateInput, "overRentalDate"> {
        return {
            overRentalDate,
        };
    }
    static modelId(modelId: number): Pick<Prisma.CarCreateInput, "carModel"> {
        return {
            carModel: {
                connect: {
                    id: modelId,
                },
            },
        };
    }
    static setcarStatusToAVAILABLE(): Pick<Prisma.CarCreateInput, "carStatus"> {
        return {
            carStatus: "AVAILABLE",
        };
    }
}
