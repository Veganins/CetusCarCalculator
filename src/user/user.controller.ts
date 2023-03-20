import { Controller, Get, UseGuards } from "@nestjs/common";
import { User } from "@prisma/client";
import { GetUser } from "src/api/decorator/get-user.decorator";
@Controller("user")
export class UserController {
    @Get("me")
    GetMe(@GetUser() user: User) {
        return user;
    }
}
