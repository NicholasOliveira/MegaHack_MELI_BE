import { Products } from '../entities/product.entity';
export class salePrediction {
  product: Products;
  last_month_sales: number;
  next_month_prediction: number;
}
