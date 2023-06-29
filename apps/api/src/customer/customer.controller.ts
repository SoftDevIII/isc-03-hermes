import { Body, Controller, Get, Post } from '@nestjs/common';
import CustomerService from './customer.service';
import Customer from './custumer.entity';
import CreateCustomerDto from './dto/create-customer.dto';

@Controller('customer')
class CustomerController {
  constructor(private readonly userService: CustomerService) {}

  @Get()
  getCustomers(): Promise<Customer[]> {
    return this.userService.getCustomers();
  }

  @Post()
  credentialVerification(
    @Body() customer: CreateCustomerDto
  ): Promise<boolean> {
    return this.userService.credentialVerification(
      customer.email,
      customer.password
    );
  }

  @Post('signup')
  signUpSave(@Body() customer: CreateCustomerDto): Promise<Customer> {
    return this.userService.signUpSave(customer);
  }
}

export default CustomerController;
