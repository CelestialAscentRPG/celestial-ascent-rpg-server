import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as compression from 'compression';
import helmet from 'helmet';
import { ResponseInterceptor } from './utils/Response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(compression());
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.enableCors();
  app.use(helmet());
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
