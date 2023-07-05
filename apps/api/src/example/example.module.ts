import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ExampleController from './example.controller';
import ExampleService from './example.service';
import Test from './test.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Test])],
  controllers: [ExampleController],
  providers: [ExampleService]
})
export default class ExampleModule {}
