import { Type } from "class-transformer";
import { IsDate, IsEmail, IsNotEmpty, IsString } from "class-validator";
export class RegisterDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;
    @IsDate()
    @IsNotEmpty()
    @Type(() => Date)
    expirationDateDrivingLicense: Date;
    @IsDate()
    @IsNotEmpty()
    @Type(() => Date)
    birthDate: Date;
    @IsString()
    @IsNotEmpty()
    password: string;
    @IsString()
    @IsNotEmpty()
    confirmpassword: string;
}
