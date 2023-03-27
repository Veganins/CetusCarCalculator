import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AtStrategy } from "./at.strategy";

@Module({
    imports: [JwtModule.register({})],
    providers: [AtStrategy],
})
export class AuthModule {}
