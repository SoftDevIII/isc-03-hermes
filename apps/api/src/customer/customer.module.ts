import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import RegexModule from 'src/regex/regex.module';
import CustomerController from './customer.controller';
import CustomerService from './customer.service';
import Customer from './custumer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Customer]), RegexModule],
  controllers: [CustomerController],
  providers: [CustomerService]
})
export default class CustomerModule {}
