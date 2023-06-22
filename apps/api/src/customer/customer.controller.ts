import { Body, Controller, Post } from '@nestjs/common';
import CustomerService from './customer.service';
import Customer from './custumer.entity';
import CreateCustomerDto from './dto/create-customer.dto';

@Controller('customer')
class CustomerController {
  constructor(private readonly userService: CustomerService) {}

  @Post()
  createTest(@Body() customer: CreateCustomerDto): Promise<Customer> {
    console.log(customer);
    console.log(customer.email);
    console.log(customer.password);
    return this.userService.credentialVerification(
      customer.email,
      customer.password
    );
  }
}

export default CustomerController;
