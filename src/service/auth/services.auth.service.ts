import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import * as argon from "argon2";
//import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { ConfigService } from "@nestjs/config";
import { RegisterDto } from "src/api/auth/dto/auth.registerUser.dto";
import { ServicesAuthValidator } from "./services.auth.validator";
import { RepositoryUsersDataFactory } from "src/repositories/users/repository.users.dataFactory";
import { RepositoryUsersRepository } from "src/repositories/users/repository.users.repository";
import { Prisma } from "@prisma/client";
import { SignInUserEntity } from "src/api/auth/entity/auth.signIn.entity";
import { SignInDto } from "src/api/auth/dto";

@Injectable()
export class ServisesAuthServise {
    constructor(
        private readonly usersRepository: RepositoryUsersRepository,
        private prisma: PrismaService,
        private config: ConfigService,
        private readonly validator: ServicesAuthValidator
    ) {}
    async signup(registerdata: RegisterDto): Promise<void> {
        //geanerate the password hash
        const { password, confirmpassword, email, birthDate, expirationDateDrivingLicense } =
            registerdata;
        this.validator.passwordValidatorErrorHandler(password, confirmpassword);
        await this.validator.emailValidatorErrorHandler(email);
        this.validator.birthDateValidatorErrorHandler(birthDate);
        this.validator.expirationDateDrivingLicenseValidatorErrorHandler(
            expirationDateDrivingLicense
        );
        const hashedPassword = await argon.hash(password);

        const createUserData: Prisma.UserCreateInput = {
            ...RepositoryUsersDataFactory.password(hashedPassword),
            ...RepositoryUsersDataFactory.email(email),
            ...RepositoryUsersDataFactory.birthDate(birthDate),
            ...RepositoryUsersDataFactory.expirationDateDrivingLicense(
                expirationDateDrivingLicense
            ),
            ...RepositoryUsersDataFactory.setRoleToNormalUser(),
        };
        await this.usersRepository.create(createUserData);
    }
    //async signin({
    //    isInfiniteSessionLive,
    //    res,
    //    signInUserData,
    //}: {
    //    signInUserData: SignInDto;
    //    isInfiniteSessionLive: boolean;
    //    res: Response;
    //}): Promise<SignInUserEntity> {
    //    const { password, email } = signInUserData;
    //    const where: Prisma.UserWhereUniqueInput = {};
    //    return;
    //} /*
    //async signToken(userId: number, email: string): Promise<{ access_token: string }> {
    //    const payload = {
    //        sub: userId,
    //        email,
    //    };
    //    const secret = this.config.get("JWT_SECRET");
    //    const token = await this.jwt.signAsync(payload, {
    //        expiresIn: "15m",
    //        secret: secret,
    //    });
    //    return {
    //        access_token: token,
    //    };
    //}
    //logout() {}
    //refresh() {}*/
}
