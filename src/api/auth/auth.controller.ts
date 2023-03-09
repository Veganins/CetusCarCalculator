import { Body, Controller, Post } from "@nestjs/common";
import { AuthServise } from "./auth.servise";
import { AuthDto } from "./dto";

@Controller("auth")
export class AuthController {
    constructor(private authService: AuthServise) {}
    @Post("signup")
    signin(@Body() dto: AuthDto) {
        return this.authService.signup(dto);
    }
    @Post("signin")
    signup(@Body() dto: AuthDto) {
        return this.authService.signin(dto);
    }
}
