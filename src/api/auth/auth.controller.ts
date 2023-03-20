import {
    Body,
    Controller,
    HttpCode,
    HttpStatus,
    ParseBoolPipe,
    Post,
    Query,
    Res,
} from "@nestjs/common";
import { ServisesAuthServise } from "src/service/auth/services.auth.service";
import { RegisterDto, SignInDto } from "./dto";
import { SignInUserEntity } from "./entity/auth.signIn.entity";

@Controller("auth")
export class AuthController {
    constructor(private authService: ServisesAuthServise) {}

    @Post("/register-user")
    @HttpCode(HttpStatus.CREATED)
    async signup(@Body() dto: RegisterDto) {
        return await this.authService.signup(dto);
    }
    //@Post("/sign-in")
    //@HttpCode(HttpStatus.OK)
    //async signIn(
    //    @Body() signInData: SignInDto,
    //    @Query("isInfiniteSessionLive", ParseBoolPipe) isInfiniteSessionLive: boolean,
    //    @Res({ passthrough: true }) res: Response
    //): Promise<SignInUserEntity> {
    //    return await this.authService.signin({
    //        isInfiniteSessionLive,
    //        res,
    //        signInUserData: signInData,
    //    });
    //}
    // @HttpCode(HttpStatus.OK)

    // @Post("/logout")
    // logout() {
    //     this.authService.logout();
    // }
    // @Post("/refresh")
    // refresh() {
    //     this.authService.refresh();
    // }
}
