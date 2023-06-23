import { Test, TestingModule } from '@nestjs/testing';
import CustomerController from '../customer.controller';
import CustomerService from '../customer.service';

describe('CustomerController', () => {
  let customerController: CustomerController;
  const customerService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerController],
      providers: [CustomerService]
    })
      .overrideProvider(CustomerService)
      .useValue(customerService)
      .compile();

    customerController = module.get<CustomerController>(CustomerController);
  });

  describe('findAll', () => {
    it('should return an array of cats', () => {
      // const result = ['test'];
      expect(customerController).toBeDefined();
    });
  });
});
