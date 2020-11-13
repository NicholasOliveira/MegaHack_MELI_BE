import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //To use the class-transform globally
  //app.useGlobalInterceptors(new ClassSerializerInterceptor(new Reflector()));
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.enableCors();
  //app.useGlobalPipes(new ValidationPipe());
  await app.listen(3333);
}
bootstrap();
