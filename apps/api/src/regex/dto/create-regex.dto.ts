import RegexValidator from '../regex.enum';

class CreateRegexDto {
  customer_name: string;

  customer_last_name: string;

  email: string;

  password: string;

  customer_country: string;

  login: RegexValidator;
}

export default CreateRegexDto;
