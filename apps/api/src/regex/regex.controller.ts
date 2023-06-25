import { Body, Controller, Post } from '@nestjs/common';
import CreateRegexDto from './dto/create-regex.dto';
import RegexValidator from './regex.enum';
import RegexService from './regex.service';

@Controller('regex')
class RegexController {
  constructor(private readonly regexService: RegexService) {}

  @Post()
  inputValidation(@Body() regex: CreateRegexDto): RegexValidator | boolean {
    try {
      this.regexService.regexValidation(
        regex.customer_name,
        regex.customer_last_name,
        regex.password,
        regex.email,
        regex.customer_country,
        regex.login
      );
      return true;
    } catch (error: any) {
      if (error instanceof Error && error.message) {
        return false;
      }
      return false;
    }
  }
}

export default RegexController;
