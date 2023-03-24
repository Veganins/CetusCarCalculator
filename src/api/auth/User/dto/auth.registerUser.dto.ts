import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString } from "class-validator";
export class RegisterDto {
    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    email: string;
    @ApiProperty()
    @IsDate()
    @IsNotEmpty()
    @IsOptional()
    @Type(() => Date)
    expirationDateDrivingLicense: Date;
    @ApiProperty()
    @IsDate()
    @IsNotEmpty()
    @IsOptional()
    @Type(() => Date)
    birthDate: Date;
    @ApiProperty()
    @IsOptional()
    @IsPhoneNumber()
    @IsString()
    phoneNumber: string;
    @ApiProperty()
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    address: string;
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    password: string;
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    confirmpassword: string;
}
