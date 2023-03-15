import { TransformFnParams } from "class-transformer/types/interfaces";
import { BadRequestException } from "@nestjs/common";
import { isDate } from "date-fns";
import { BadDateValueError } from "../errors/400/badDateValue.error";

export function stringToDateTransform(transformData: TransformFnParams): any {
    const keyName = transformData.key;
    const editableValue = transformData.obj[keyName];

    if (typeof editableValue !== "string")
        throw new BadRequestException(`${keyName} is not string`);

    const date = new Date(editableValue);
    if (!isDate(date)) throw new BadDateValueError(`${editableValue} `);

    transformData.obj[keyName] = date;

    return transformData.obj[keyName];
}
