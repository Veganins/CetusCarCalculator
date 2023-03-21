import { Type } from "class-transformer";
import {
    IsDate,
    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsPhoneNumber,
    IsString,
} from "class-validator";
export class RegisterDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;
    @IsDate()
    @IsNotEmpty()
    @IsOptional()
    @Type(() => Date)
    expirationDateDrivingLicense: Date;
    @IsDate()
    @IsNotEmpty()
    @IsOptional()
    @Type(() => Date)
    birthDate: Date;
    @IsOptional()
    @IsPhoneNumber()
    @IsString()
    phoneNumber: string;
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    address: string;
    @IsString()
    @IsNotEmpty()
    password: string;
    @IsString()
    @IsNotEmpty()
    confirmpassword: string;
}
