import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  HttpStatus,
  HttpCode,
  Query,
} from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { CreateProductDto } from '../dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get('/predictions')
  findBestPredictionsByCategory(@Query('category') category: string) {
    return this.productsService.findBestPredictions(category);
  }

  @Get('/predictionsmonth/:month/:project')
  findBestPredictionsByMonth(
    @Param('month') month: number,
    @Param('project') project_id: number,
  ) {
    return this.productsService.getPredictionWithinAMonth(month, project_id);
  }

  @Get('/history')
  getHistory() {
    return this.productsService.getAllHistory();
  }

  @Get('/message/:pergunta')
  getBotMessage(@Param('pergunta') pergunta: string) {
    return this.productsService.showMessages(pergunta);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findById(id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }
}
