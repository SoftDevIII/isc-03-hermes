import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post
} from '@nestjs/common';
import CreateTestDto from './dto/create-test.dto';
import ExampleService from './example.service';
import Test from './test.entity';

@Controller('test')
class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @Get()
  getTests(): Promise<Test[]> {
    return this.exampleService.getTests();
  }

  @Get(':id')
  getTest(@Param('id', ParseIntPipe) id: number): Promise<Test> {
    return this.exampleService.getTest(id);
  }

  @Post()
  createTest(@Body() test: CreateTestDto): Promise<Test> {
    return this.exampleService.createTest(test);
  }
}

export default ExampleController;
