import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class Products {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  product_name: string;

  @Column()
  product_description: string;

  @Column()
  product_image: string;

  @Column()
  product_category: string;

  @Column()
  price: number;

  @Column()
  average_sell: number;

  @Column()
  rating: number;

  @Column()
  relevance: number;
}
