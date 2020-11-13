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

  async findAll() {
    const ProductsLists: CreateProductDto[] = [
      {
        product_category: 'shoes',
        product_name: 'Sapato preto alto',
        product_description: 'Sapato comum,preto',
        product_image:
          'https://icons.iconarchive.com/icons/icons8/windows-8/128/Clothing-Shoe-Man-icon.png',
        rating: 3,
        price: 120.0,
        average_sell: 23940,
      },
      {
        product_category: 'shoes',
        product_name: 'Sapato marrom alto',
        product_description: 'Sapato comum,marrom',
        product_image:
          'https://icons.iconarchive.com/icons/icons8/windows-8/128/Clothing-Shoe-Man-icon.png',
        rating: 3.5,
        price: 100.0,
        average_sell: 35000,
      },
      {
        product_category: 'shoes',
        product_name: 'Sapato prateado médio',
        product_description: 'Sapato prateado com cano médio',
        product_image:
          'https://icons.iconarchive.com/icons/icons8/windows-8/128/Clothing-Shoe-Man-icon.png',
        rating: 4,
        price: 98.0,
        average_sell: 50351,
      },
      {
        product_category: 'shoes',
        product_name: 'Sapato Scarpin',
        product_description: 'Sapato scarpin tradicional',
        product_image:
          'https://icons.iconarchive.com/icons/icons8/windows-8/128/Clothing-Shoe-Man-icon.png',
        rating: 4.5,
        price: 145.0,
        average_sell: 83241,
      },
    ];

    return this.productsRepository.find();
  }

  async findById(id: string): Promise<Products> {
    const Product = await this.productsRepository.findOne({ where: { id } });

    if (!Product) {
      throw new NotFoundException('This Product does not exist');
    }
    return Product;
  }

  update(id: string, updateProductDto: any) {
    return `This action updates a #${id} product`;
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
