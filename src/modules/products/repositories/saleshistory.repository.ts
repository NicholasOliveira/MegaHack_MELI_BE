import { EntityRepository, Repository } from 'typeorm';

import { CreateSaleHistoryDto } from '../dto/create-sale-history.dto';
import { Products } from '../entities/product.entity';
import { SalesHistory } from '../entities/saleshistory.entity';

@EntityRepository(SalesHistory)
export default class SalesHistoryRepository extends Repository<SalesHistory> {
  public async CreateProduct(createSaleHistoryDto: CreateSaleHistoryDto) {
    const { product_id, quantity, sale_date } = createSaleHistoryDto;
    const createProduct = this.create({
      ...createSaleHistoryDto,
      sale_date_day: sale_date.getDate(),
      sale_date_month: sale_date.getMonth(),
      sale_date_year: sale_date.getFullYear(),
    });
    return await this.save(createProduct);
  }

  public async getByMonth(
    month: number,
    product_id: number,
  ): Promise<SalesHistory[]> {
    return await this.find({
      where: { sale_date_day: month, product_id },
    });
  }
}
