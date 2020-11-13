import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CustomerModule } from './modules/customer/customer.module';
import { ProductsModule } from './modules/products/products.module';

@Module({
  //Create the DB connection, than import the UsersModule
  imports: [TypeOrmModule.forRoot(), ProductsModule, CustomerModule],
})
export class AppModule {}
