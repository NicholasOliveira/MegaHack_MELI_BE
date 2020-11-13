import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ProductsService } from './modules/products/services/products.service';
import { FakeDataProducts } from './FakeData/FakeDataProvider';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const prodServices = app.get(ProductsService);
  prodServices.createFakeData(FakeDataProducts);
  await app.listen(3333);
}
bootstrap();
