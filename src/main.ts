import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as compression from 'compression';
import helmet from 'helmet';
import { ResponseInterceptor } from './utils/Response.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { knife4jSetup } from 'nest-knife4j';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const apiDocumentation = {
    title: 'Celestial Ascent RPG Server',
    description: 'The Celestial Ascent RPG Server API Documentation',
    version: '1.0',
  };
  const config = new DocumentBuilder()
    .setTitle(apiDocumentation.title)
    .setDescription(apiDocumentation.description)
    .setVersion(apiDocumentation.version)
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/swagger', app, documentFactory, {
    jsonDocumentUrl: '/api/swagger/json',
  });
  knife4jSetup(app, [
    {
      name: apiDocumentation.title,
      url: `/api/swagger/json`,
      swaggerVersion: '1.0',
      location: `/api/swagger/json`,
    },
  ]);
  app.use(compression());
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.enableCors();
  app.use(helmet());
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
