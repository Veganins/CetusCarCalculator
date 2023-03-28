import { BadRequestException } from "@nestjs/common";
import { PRICECATEGORY } from "@prisma/client";
import { TransformFnParams } from "class-transformer";
import { BadDateValueError } from "../errors/400/badDateValue.error";

export function stringToEnumTransform(
    transformData: TransformFnParams
    // baseEnum: PRICECATEGORY
): any {
    const Keyname = transformData.key;
    const editableValue = transformData.obj[Keyname];
    if (typeof editableValue !== "string")
        throw new BadRequestException(`${Keyname} is not string`);
    if (!(editableValue in PRICECATEGORY)) throw new BadDateValueError(`${editableValue}`);
    return transformData.obj[Keyname];
}
