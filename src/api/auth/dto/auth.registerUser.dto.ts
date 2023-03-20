import { Type } from "class-transformer";
import { IsDate, IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
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
    @IsString()
    @IsNotEmpty()
    password: string;
    @IsString()
    @IsNotEmpty()
    confirmpassword: string;
}
