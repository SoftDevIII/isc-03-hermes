import { Body, Controller, Post } from '@nestjs/common';
import RegexValidator from 'src/regex/regex.enum';
import RegexService from 'src/regex/regex.service';
import CustomerService from './customer.service';
import CreateCustomerDto from './dto/create-customer.dto';

@Controller('customer')
class CustomerController {
  constructor(
    private readonly userService: CustomerService,

    private readonly regexService: RegexService
  ) {}

  @Post()
  credentialVerification(
    @Body() customer: CreateCustomerDto
  ): Promise<boolean> {
    try {
      this.regexService.regexValidation(
        undefined,

        undefined,

        customer.password,

        customer.email,

        undefined,

        RegexValidator.LOGIN
      );
    } catch (error: any) {
      throw new Error(error as string);
    }

    return this.userService.credentialVerification(
      customer.email,

      customer.password
    );
  }
}

export default CustomerController;
