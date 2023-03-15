import { IsDate, IsEmail, IsNotEmpty, IsString } from "class-validator";
export class RegisterDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;
    @IsDate()
    @IsNotEmpty()
    expirationDateDrivingLicense: Date;
    @IsString()
    @IsNotEmpty()
    birthDate: Date;
    @IsString()
    @IsNotEmpty()
    password: string;
    @IsString()
    @IsNotEmpty()
    confirmpassword: string;
}
