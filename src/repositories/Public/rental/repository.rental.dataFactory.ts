import { Prisma } from "@prisma/client";
export class RepositoryRentalDataFactory {
    static dateEndRental(dateEndRental: Date): Pick<Prisma.RentalCreateInput, "dateEndRental"> {
        return {
            dateEndRental,
        };
    }
    static dateStartRental(
        dateStartRental: Date
    ): Pick<Prisma.RentalCreateInput, "dateStartRental"> {
        return {
            dateStartRental,
        };
    }
    static userId(userId: number): Pick<Prisma.RentalCreateInput, "users"> {
        return {
            users: {
                connect: {
                    id: userId,
                },
            },
        };
    }
    static carId(carId: number): Pick<Prisma.RentalCreateInput, "car"> {
        return {
            car: {
                connect: {
                    id: carId,
                },
            },
        };
    }

    static setRentalStatusToLASTS(): Pick<Prisma.RentalCreateInput, "status"> {
        return {
            status: "LASTS",
        };
    }
}
