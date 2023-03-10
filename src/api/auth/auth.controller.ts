import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthServise } from "./auth.servise";
import { AuthDto } from "./dto";

@Controller("auth")
export class AuthController {
    constructor(private authService: AuthServise) {}
    @Post("signup")
    signin(@Body() dto: AuthDto) {
        return this.authService.signup(dto);
    }
    @HttpCode(HttpStatus.OK)
    @Post("signin")
    signup(@Body() dto: AuthDto) {
        return this.authService.signin(dto);
    }
}
