import { EntityRepository, Like, Repository } from 'typeorm';
import { Products } from '../entities/product.entity';
import { CreateProductDto } from '../dto/create-product.dto';
@EntityRepository(Products)
export default class ProductsRepository extends Repository<Products> {
  public async CreateProduct(createProductDto: CreateProductDto) {
    const createProduct = this.create(createProductDto);
    const createdProduct = await this.save(createProduct);
    return await this.calculateRelevance(createdProduct);
  }

  public async calculateRelevance(products: Products): Promise<Products> {
    const relevance = Math.floor(
      (products.rating * (products.average_sell / 24 / 60)) / 2,
    );

    products.relevance = relevance;

    return await this.save(products);
  }

  public async FindByRelevanceWithinACategory(
    category: string,
  ): Promise<Products[]> {
    return await this.find({
      where: { product_category: Like(`%${category}%`) },
      order: { relevance: 'DESC' },
    });
  }
}
