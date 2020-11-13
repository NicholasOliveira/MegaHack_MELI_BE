import { Products } from '../../products/entities/product.entity';

export class Customer {
  name: string;

  level: number;

  sales_amount: number;

  income: number;

  income_average: number;

  wharehouse: productStock[];
}

export interface productStock {
  product: Products;
  sell_quantity: number;
  income: number;
  available: number;
  last_sale: Date;
}
