import { Injectable } from "@nestjs/common";
import { Prisma, Rental } from "@prisma/client";
import { compareAsc, differenceInDays } from "date-fns";
import { RentalDto } from "src/api/public/rental/dto/public.rental.dto";
import { RepositoryRentalRepository } from "src/repositories/Public/rental/repository.rental.Repository";
import { RepositoryRentalDataFactory } from "src/repositories/Public/rental/repository.rental.dataFactory";
import { dateDrivingLicence } from "./errors/dateDrivinglicence.error";
import { MessageEntity } from "src/api/public/rental/entity/public.message.entity";

@Injectable()
export class ServisesPublicRentalServise {
    constructor(private readonly rentalRepository: RepositoryRentalRepository) {}
    async rent(userId: number, rentalData: RentalDto): Promise<MessageEntity> {
        const { idcar, dateEndRental, dateStartRental, mileageRange } = rentalData;

        const createRentalData: Prisma.RentalCreateInput = {
            ...RepositoryRentalDataFactory.dateStartRental(dateStartRental),

            ...RepositoryRentalDataFactory.dateEndRental(dateEndRental),

            ...RepositoryRentalDataFactory.carId(idcar),
            ...RepositoryRentalDataFactory.userId(userId),
            ...RepositoryRentalDataFactory.setRentalStatusToLASTS(),
        };

        const day = differenceInDays(dateEndRental, dateStartRental);
        const car = await this.rentalRepository.getCar(idcar);
        const carModel = await this.rentalRepository.getCarModel(car.carModelId);
        const user = await this.rentalRepository.getUser(userId);
        const priceday = day * car.dayRentalPrice;
        let price = priceday;
        const fuel = 1.49;
        const consumed = parseFloat((car.fuelConsumption / (mileageRange / 100)).toFixed(2));
        const costper100 = parseFloat((consumed * fuel).toFixed(2));
        console.log(car.fuelConsumption);
        console.log(mileageRange / 100);
        price = costper100 + price;
        let mnoznik = 0;
        switch (carModel.priceCategory) {
            case "BASIC":
                mnoznik = 1;
                price = price * mnoznik;
                break;
            case "STANDARD":
                mnoznik = 1.3;
                price = price * mnoznik;
                break;
            case "MEDIUM":
                mnoznik = 1.6;
                price = price * mnoznik;
                break;
            case "PREMIUM":
                if (differenceInDays(Date.now(), user.getDrivingLicense) >= 1095) {
                    mnoznik = 2;
                    price = price * mnoznik;
                } else {
                    throw dateDrivingLicence;
                }
                break;
        }

        if (differenceInDays(Date.now(), user.getDrivingLicense) >= 1826) {
            price = price * 0.3;
        }
        console.log(price.toFixed(2));

        await this.rentalRepository.create(createRentalData);
        return new MessageEntity({
            message: `Cena wyporzyczenia auta składa sie z: wyporzycznie auta na ${day} dni czy koszcie ${car.dayRentalPrice} za dzień wynosi ${priceday}, przejechanie autem ${mileageRange}Km przy spalaniu ${consumed} wynosi ${costper100} ,
             za wypożycznie auta ${carModel.priceCategory} przy mnożniku ${mnoznik} wynosi , całość wynosi ${price}`,
        });
    }
}
