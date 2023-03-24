import { CacheModule, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AuthUserModule } from "./api/auth/User/auth.user.module";

import { PrismaModule } from "./prisma/prisma.module";

@Module({
    imports: [
        AuthUserModule,
        PrismaModule,
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        CacheModule.register({
            isGlobal: true,
            ttl: 1, // seconds
            max: 20, // maximum number of items in cache
        }),
    ],
})
export class AppModule {}
