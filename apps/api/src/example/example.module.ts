import { Module } from '@nestjs/common';
import { ExampleController } from './example.controller';
import { ExampleService } from './example.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Test } from './test.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Test])],
  controllers: [ExampleController],
  providers: [ExampleService]
})
export class ExampleModule {}
