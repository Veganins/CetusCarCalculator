import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { ServisesAuthServise } from "src/service/auth/services.auth.service";
import { RegisterDto } from "./dto";

@Controller("auth")
export class AuthController {
    constructor(private authService: ServisesAuthServise) {}

    @Post("/signup")
    @HttpCode(HttpStatus.CREATED)
    async signup(@Body() dto: RegisterDto) {
        return await this.authService.signup(dto);
    }
    // @HttpCode(HttpStatus.OK)
    // @Post("/signin")
    // signin(@Body() dto: RegisterDto) {
    //     return this.authService.signin(dto);
    // }
    // @Post("/logout")
    // logout() {
    //     this.authService.logout();
    // }
    // @Post("/refresh")
    // refresh() {
    //     this.authService.refresh();
    // }
}
