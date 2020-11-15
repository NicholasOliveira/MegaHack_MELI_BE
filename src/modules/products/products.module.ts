import { Module } from '@nestjs/common';
import { ProductsService } from './services/products.service';
import { ProductsController } from './controllers/products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import ProductsRepository from './repositories/products.repository';
import SalesHistoryRepository from './repositories/saleshistory.repository';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [
    TypeOrmModule.forFeature([ProductsRepository, SalesHistoryRepository]),
  ],
})
export class ProductsModule {}
