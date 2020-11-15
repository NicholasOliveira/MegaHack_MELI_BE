import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ProductsService } from './modules/products/services/products.service';
import {
  FakeProductsLists,
  FakeSalesHistory,
} from './FakeData/FakeDataProvider';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const prodServices = app.get(ProductsService);
  //await prodServices.createFakeData(FakeProductsLists);
  //await prodServices.createFakeDataHistory(FakeSalesHistory);
  await app.listen(3333);
}
bootstrap();
