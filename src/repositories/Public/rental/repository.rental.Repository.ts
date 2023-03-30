import { Injectable, Logger } from "@nestjs/common";
import { Car, CarModel, Prisma } from "@prisma/client";
import { CarRentEntity } from "src/api/public/searcher/entity/public.carRent.entity";
import { PrismaService } from "src/prisma/prisma.service";
@Injectable()
export class RepositoryRentalRepository {
    constructor(private prisma: PrismaService) {}
}
