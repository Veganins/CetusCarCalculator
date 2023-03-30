import { PRICECATEGORY, Prisma } from "@prisma/client";

export class RepositoryCarModelDataFactory {
    static model(model: string): Pick<Prisma.CarModelCreateInput, "model"> {
        return {
            model,
        };
    }
    static barnd(barnd: string): Pick<Prisma.CarModelCreateInput, "barnd"> {
        return {
            barnd,
        };
    }
    static priceCategory(
        priceCategory: PRICECATEGORY
    ): Pick<Prisma.CarModelCreateInput, "priceCategory"> {
        return {
            priceCategory,
        };
    }
}
