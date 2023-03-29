import { BadRequestException } from "@nestjs/common";
import { CARSTATUS } from "@prisma/client";
import { TransformFnParams } from "class-transformer";
import { BadEnumValueError } from "../../errors/400/badEnumValue.error ";

export function stringToEnumTransform(transformData: TransformFnParams): any {
    const Keyname = transformData.key;
    const editableValue = transformData.obj[Keyname];
    if (typeof editableValue !== "string")
        throw new BadRequestException(`${Keyname} is not string`);
    if (!(editableValue in CARSTATUS)) throw new BadEnumValueError(`${editableValue}`);
    return transformData.obj[Keyname];
}
