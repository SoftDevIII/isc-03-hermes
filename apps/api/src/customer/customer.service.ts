import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Customer from './custumer.entity';

@Injectable()
class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>
  ) {}

  credentialVerification(userEmail: string, userPassword: string) {
    return this.customerRepository.findOne({
      where: {
        email: userEmail,
        password: userPassword
      }
    });
  }
}

export default CustomerService;
