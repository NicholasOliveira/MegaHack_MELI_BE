import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from '../dto/create-product.dto';
import { Products } from '../entities/product.entity';
import ProductsRepository from '../repositories/products.repository';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductsRepository)
    private productsRepository: ProductsRepository,
  ) {}

  create(createProductDto: CreateProductDto) {
    return this.productsRepository.CreateProduct(createProductDto);
  }

  createFakeData(createProductDto: CreateProductDto[]) {
    const products = createProductDto.map(
      async (eachProduct) =>
        await this.productsRepository.CreateProduct(eachProduct),
    );
    return products;
  }

  async findAll() {
    return this.productsRepository.find();
  }

  async findById(id: string): Promise<Products> {
    const Product = await this.productsRepository.findOne({ where: { id } });

    if (!Product) {
      throw new NotFoundException('This Product does not exist');
    }
    return Product;
  }

  async remove(id: string) {
    const Product = await this.findById(id);
    return await this.productsRepository.remove(Product);
  }

  public async findBestPredictions(category: string): Promise<Products[]> {
    return await this.productsRepository.FindByRelevanceWithinACategory(
      category,
    );
  }
}
