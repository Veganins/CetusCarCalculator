import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as cookieParser from "cookie-parser";
async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const config = new DocumentBuilder()
        .setTitle("CarCalculator")
        .setVersion("v1")
        .addBearerAuth()
        .build();
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            transform: true,
        })
    );
    app.use(cookieParser());
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("swagger", app, document);
    await app.listen(3000);
}
bootstrap();
