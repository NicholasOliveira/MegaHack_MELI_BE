import { Controller, Get } from '@nestjs/common';
import { FakeDataCustomers } from '../../../FakeData/FakeDataProvider';

@Controller('customer')
export class CustomerController {
  @Get()
  findAll() {
    return FakeDataCustomers;
  }
}
