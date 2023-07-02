import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Customer from './custumer.entity';
import CreateCustomerDto from './dto/create-customer.dto';

@Injectable()
class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>
  ) {}

  credentialVerification(
    userEmail: string,
    userPassword: string
  ): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.customerRepository
        .findOne({
          where: {
            email: userEmail,
            password: userPassword
          }
        })
        .then((customer: Customer | null) => {
          const isVerified = customer !== null;
          resolve(isVerified);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }

  getCustomers() {
    return this.customerRepository.find();
  }

  signUpSave(customer: CreateCustomerDto) {
    const newCustomer = this.customerRepository.create(customer);
    return this.customerRepository.save(newCustomer);
  }
}

export default CustomerService;
