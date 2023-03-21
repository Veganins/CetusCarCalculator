import { CacheModule, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "./api/auth/auth.module";

import { PrismaModule } from "./prisma/prisma.module";

@Module({
    imports: [
        AuthModule,
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
