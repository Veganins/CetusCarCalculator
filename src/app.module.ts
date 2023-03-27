import { CacheModule, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { APP_GUARD } from "@nestjs/core";
import { join } from "path";
import { AuthUserModule } from "./api/auth/User/auth.user.module";
import { AuthModule } from "./api/auth/User/strategies/auth.module";
import { AtGuard } from "./common/guards/at.guard";
import { isTokenActiveGuard } from "./common/guards/isTokenActive.guard";

import { PrismaModule } from "./prisma/prisma.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: [
                process.env.BUILD_TYPE === "staging"
                    ? join(".env.staging")
                    : process.env.BUILD_TYPE === "production"
                    ? join(".env.production")
                    : process.env.BUILD_TYPE === "development"
                    ? join(".env.development")
                    : ".env.development",
            ],
        }),

        AuthModule,
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
    providers: [
        {
            provide: APP_GUARD,
            useClass: AtGuard,
        },
        {
            provide: APP_GUARD,
            useClass: isTokenActiveGuard,
        },
    ],
})
export class AppModule {}
