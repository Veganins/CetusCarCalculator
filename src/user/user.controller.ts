import { Controller, Get, UseGuards } from "@nestjs/common";
import { User } from "@prisma/client";
import { JwtGuard } from "src/api/auth/guard";
import { GetUser } from "src/api/decorator/get-user.decorator";
@UseGuards(JwtGuard)
@Controller("user")
export class UserController {
    @Get("me")
    GetMe(@GetUser() user: User, @GetUser("email") email: string) {
        return user;
    }
}
