import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Regex from './regex.entity';

@Injectable()
class RegexService {
  constructor(
    @InjectRepository(Regex)
    private readonly regexRepository: Repository<Regex>
  ) {}

  private nameRegex = /^[a-zA-Z]+$/;

  private lastNameRegex = /^[a-zA-Z]+$/;

  private emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

  private passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  regexValidation(
    name: string,
    last_name: string,
    userPassword: string,
    userEmail: string,
    country: string
  ) {
    if (!this.nameRegex.test(name)) {
      throw new Error('The name can only contain letters');
    }

    if (!this.lastNameRegex.test(last_name)) {
      throw new Error('The last name can only contain letters');
    }

    if (!this.emailRegex.test(userEmail)) {
      throw new Error('The e-mail format is invalid');
    }

    if (!this.passwordRegex.test(userPassword)) {
      throw new Error(
        'The password must be at least 8 characters long, including a letter and a number'
      );
    }

    if (!country) {
      throw new Error('The country cannot be empty');
    }
  }
}

export default RegexService;
