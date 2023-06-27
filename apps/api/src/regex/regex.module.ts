import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import RegexController from './regex.controller';
import Regex from './regex.entity';
import RegexService from './regex.service';

@Module({
  imports: [TypeOrmModule.forFeature([Regex])],
  controllers: [RegexController],
  providers: [RegexService],
  exports: [RegexService]
})
export default class RegexModule {}
