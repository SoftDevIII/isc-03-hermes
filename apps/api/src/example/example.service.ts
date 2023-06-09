import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateTestDto from './dto/create-test.dto';
import Test from './test.entity';

@Injectable()
class ExampleService {
  constructor(
    @InjectRepository(Test) private readonly testRepository: Repository<Test>
  ) {}

  createTest(test: CreateTestDto) {
    const newUser = this.testRepository.create(test);
    return this.testRepository.save(newUser);
  }

  getTests() {
    return this.testRepository.find();
  }

  getTest(id: number) {
    return this.testRepository.findOne({
      where: {
        id_test: id
      }
    });
  }
}

export default ExampleService;
