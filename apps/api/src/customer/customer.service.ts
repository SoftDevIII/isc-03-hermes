import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Customer from './custumer.entity';

@Injectable()
class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly testRepository: Repository<Customer>
  ) {}

  credentialVerification(email: string, password: string) {
    console.log(this.testRepository);
    return this.testRepository.findOne({
      where: {
        Email: email,
        Password: password
      }
    });
  }
}

export default CustomerService;
