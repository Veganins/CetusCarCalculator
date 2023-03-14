import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
//import * as argon from "argon2";
//import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { RegisterDto } from "src/api/auth/dto/register.dto";
import { ServicesAuthValidator } from "./services.auth.validator";

@Injectable()
export class ServisesAuthServise {
    constructor(
        private prisma: PrismaService,
        private jwt: JwtService,
        private config: ConfigService,
        private readonly validator: ServicesAuthValidator
    ) {}
    async signup(registerdata: RegisterDto): Promise<void> {
        //geanerate the password hash
        const { password, confirmpassword, email } = registerdata;
        this.validator.passwordValidatorErrorHandler(password, confirmpassword);
        /* try {
            const hash = await argon.hash(registerdto.password);
            //save the new  user to database
            const user = await this.prisma.user.create({
                data: {
                    email: registerdto.email,
                    hash,
                },
            });
            return this.signToken(user.id, user.email);
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === "P2002") {
                    throw new ForbiddenException("Credentials Taken");
                }
            }
            throw error;
        }*/
    }
    /*async signin(dto: RegisterDto) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: dto.email,
            },
        });
        if (!user) throw new ForbiddenException("Credentials incorrect");

        const pwMatches = await argon.verify(user.hash, dto.password);
        if (!pwMatches) {
            throw new ForbiddenException("Credentials incorrect");
        }

        return this.signToken(user.id, user.email);
    }
    async signToken(userId: number, email: string): Promise<{ access_token: string }> {
        const payload = {
            sub: userId,
            email,
        };
        const secret = this.config.get("JWT_SECRET");
        const token = await this.jwt.signAsync(payload, {
            expiresIn: "15m",
            secret: secret,
        });
        return {
            access_token: token,
        };
    }
    logout() {}
    refresh() {}*/
}
