import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from '../dto/create-product.dto';
import { Products } from '../entities/product.entity';
import ProductsRepository from '../repositories/products.repository';
import { CreateSaleHistoryDto } from '../dto/create-sale-history.dto';
import SalesHistoryRepository from '../repositories/saleshistory.repository';
import { salePrediction } from '../dto/prediction.dto';
import { messages } from 'src/FakeData/FakeDataProvider';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductsRepository)
    private productsRepository: ProductsRepository,
    @InjectRepository(SalesHistoryRepository)
    private salesHistoryRepository: SalesHistoryRepository,
  ) {}

  create(createProductDto: CreateProductDto) {
    return this.productsRepository.CreateProduct(createProductDto);
  }

  async createFakeData(createProductDto: CreateProductDto[]) {
    const products = await createProductDto.map(
      async (eachProduct) =>
        await this.productsRepository.CreateProduct(eachProduct),
    );
    return products;
  }

  async createFakeDataHistory(createSaleHistoryDto: CreateSaleHistoryDto[]) {
    const saleshistory = await createSaleHistoryDto.map(
      async (eachHistory) =>
        await this.salesHistoryRepository.CreateProduct(eachHistory),
    );

    return saleshistory;
  }

  async findAll() {
    return this.productsRepository.find();
  }

  async getAllHistory() {
    return await this.salesHistoryRepository.find();
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

  public async getPredictionWithinAMonth(
    month: number,
    project_id: number,
  ): Promise<any> {
    const product = await this.productsRepository.find({
      where: { id: project_id },
    });

    const monthData = await this.salesHistoryRepository.getByMonth(
      month,
      project_id,
    );

    const qtdTotal = monthData
      .map((eachDay) => eachDay.quantity)
      .reduce((acc, cur) => cur + acc);

    const mediaMovel = qtdTotal / 7;

    const IndSazonalidade = qtdTotal / mediaMovel;

    const nextMonthPrediction = qtdTotal * IndSazonalidade;

    const salesPrediction = {
      product,
      last_month_sales: qtdTotal,
      next_month_prediction: nextMonthPrediction,
    };

    return salesPrediction;
  }

  public async showMessages(pergunta: string): Promise<Object> {
    return messages.map((msg:any)=>(
      msg.pergunta==pergunta&&msg
    ))
  }
}
