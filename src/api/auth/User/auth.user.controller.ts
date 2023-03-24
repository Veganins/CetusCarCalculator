import {
    Body,
    Controller,
    HttpCode,
    HttpStatus,
    ParseBoolPipe,
    Post,
    Query,
    Req,
    Res,
} from "@nestjs/common";
import { ServisesAuthServise } from "src/service/auth/services.auth.service";
import { RegisterDto, SignInDto } from "./dto";
import { SignInUserEntity } from "./entity/auth.signIn.entity";
import { Request, Response } from "express";
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { AccessTokenEntity } from "./entity/auth.accessTockenEntity";

@Controller("auth")
@ApiTags("Auth")
export class AuthUserController {
    constructor(private authService: ServisesAuthServise) {}
    @ApiOperation({ summary: "Create user account and sign in" })
    @ApiResponse({ type: SignInUserEntity })
    @Post("/register-user")
    @HttpCode(HttpStatus.CREATED)
    async registerUser(
        @Body() registrationData: RegisterDto,
        @Query() isInfiniteSessionLive: boolean,
        @Res({ passthrough: true }) res: Response
    ): Promise<SignInUserEntity> {
        await this.authService.signup(registrationData);
        return await this.authService.signin({
            isInfiniteSessionLive,
            res,
            signInUserData: registrationData,
        });
    }
    @ApiOperation({ summary: "Sign in" })
    @ApiResponse({ type: SignInUserEntity })
    @Post("/sign-in")
    @HttpCode(HttpStatus.OK)
    async signIn(
        @Body() signInData: SignInDto,
        @Query() isInfiniteSessionLive: boolean,
        @Res({ passthrough: true }) res: Response
    ): Promise<SignInUserEntity> {
        return await this.authService.signin({
            isInfiniteSessionLive,
            res,
            signInUserData: signInData,
        });
    }
    @ApiOperation({ summary: "Logout" })
    @ApiResponse({ type: null })
    @Post("logout")
    @ApiBearerAuth()
    @HttpCode(HttpStatus.OK)
    async logout(@Req() request: Request): Promise<unknown> {
        return this.authService.logoutUser(request?.cookies?.refreshToken);
    }

    @Post("refresh-token")
    @ApiOperation({ summary: "Return new token" })
    @ApiResponse({ type: AccessTokenEntity })
    @HttpCode(HttpStatus.OK)
    async refreshToken(
        @Req() request: Request,
        @Res({ passthrough: true }) res: Response
    ): Promise<AccessTokenEntity> {
        return this.authService.refreshToken(request?.cookies?.refreshToken, res);
    }
}
