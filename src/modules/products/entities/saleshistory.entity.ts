import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Products } from './product.entity';

@Entity('sales_history')
export class SalesHistory {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne((type) => Products, (products) => products.id, { eager: true })
  @JoinColumn({ name: 'product_id' })
  product: Products;

  @Column()
  product_id: number;

  @Column()
  quantity: number;

  @Column()
  sale_date_day: number;
  @Column()
  sale_date_month: number;
  @Column()
  sale_date_year: number;
}
