import { Body, Controller, Post } from '@nestjs/common';
import CustomerService from './customer.service';
import CreateCustomerDto from './dto/create-customer.dto';

@Controller('customer')
class CustomerController {
  constructor(private readonly userService: CustomerService) {}

  @Post()
  credentialVerification(@Body() customer: CreateCustomerDto): Promise<boolean> {
    return this.userService.credentialVerification(
      customer.email,
      customer.password
    );
  }
}

export default CustomerController;
