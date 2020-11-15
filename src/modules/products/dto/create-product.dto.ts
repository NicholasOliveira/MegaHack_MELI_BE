export class CreateProductDto {
  id?: number;
  product_name: string;
  product_description: string;
  product_image: string;
  product_category: string;
  price: number;
  cost: number;
  average_sell: number;
  rating: number;
}
