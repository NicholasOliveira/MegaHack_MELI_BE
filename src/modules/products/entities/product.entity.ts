import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class Products {
  @PrimaryGeneratedColumn('increment')
  id: number;

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
  cost: number;

  @Column({ nullable: true })
  profit: number;

  @Column({ nullable: true })
  average_sell: number;

  @Column({ nullable: true })
  rating: number;

  @Column({ nullable: true })
  relevance: number;
}
