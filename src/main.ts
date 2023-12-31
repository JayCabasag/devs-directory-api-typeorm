import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const corsOptions = {
  origin: [
    'http://localhost:3000',
    'http://localhost:4200'
  ]
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(corsOptions)
  await app.listen(3000);
}
bootstrap();
