import { Injectable } from "@nestjs/common";
import { Rental } from "@prisma/client";
import { RentalDto } from "src/api/public/rental/dto/public.rental.dto";
import { RepositoryRentalRepository } from "src/repositories/Public/rental/repository.rental.Repository";

@Injectable()
export class ServisesPublicRentalServise {
    constructor(private readonly rentalRepository: RepositoryRentalRepository) {}
    async rent(rentalData: RentalDto): Promise<Rental> {
        return;
    }
}
