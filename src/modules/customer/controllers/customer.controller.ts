import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { Customer } from '../entities/customer.entity';
import { Products } from '../../products/entities/product.entity';

@Controller('customer')
export class CustomerController {
  @Get()
  findAll() {
    const products: Products[] = [
      {
        id: '93f7ee17-7f8e-4228-a1ee-eae9c1ebe623',
        product_name: 'Sapato preto alto',
        product_description: 'Sapato comum,preto',
        product_image:
          'https://icons.iconarchive.com/icons/icons8/windows-8/128/Clothing-Shoe-Man-icon.png',
        product_category: 'shoes',
        price: 120,
        average_sell: 23940,
        rating: 3,
        relevance: 24,
      },
      {
        id: '3683fa98-3afc-4055-9221-277fb4d480b1',
        product_name: 'Sapato marrom alto',
        product_description: 'Sapato comum,marrom',
        product_image:
          'https://icons.iconarchive.com/icons/icons8/windows-8/128/Clothing-Shoe-Man-icon.png',
        product_category: 'shoes',
        price: 100,
        average_sell: 35000,
        rating: 3.5,
        relevance: 42,
      },
      {
        id: 'ca76f709-ec95-44be-8cf9-375cc9beb56d',
        product_name: 'Sapato prateado médio',
        product_description: 'Sapato prateado com cano médio',
        product_image:
          'https://icons.iconarchive.com/icons/icons8/windows-8/128/Clothing-Shoe-Man-icon.png',
        product_category: 'shoes',
        price: 98,
        average_sell: 50351,
        rating: 4,
        relevance: 69,
      },
      {
        id: '308856ec-b6ec-496f-b7c3-d0f5a0365319',
        product_name: 'Sapato Scarpin',
        product_description: 'Sapato scarpin tradicional',
        product_image:
          'https://icons.iconarchive.com/icons/icons8/windows-8/128/Clothing-Shoe-Man-icon.png',
        product_category: 'shoes',
        price: 145,
        average_sell: 83241,
        rating: 4.5,
        relevance: 130,
      },
    ];

    const customers: Customer[] = [
      {
        name: 'Dona Lia Calçados',
        level: 3,
        income: 123.45,
        sales_amount: 5,
        income_average: 24.69,
        wharehouse: [
          {
            product: products[0],
            available: 4,
            income: 123.0,
            last_sale: new Date(),
            sell_quantity: 3,
          },
          {
            product: products[1],
            available: 0,
            income: 25.0,
            last_sale: new Date(),
            sell_quantity: 2,
          },
        ],
      },
    ];
    return customers;
  }
}
