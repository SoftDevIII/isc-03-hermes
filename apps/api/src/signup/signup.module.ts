import { Module } from '@nestjs/common';
import SignUpController from './signup.controller';
import TokenGenerateService from './signup.service';

@Module({
  controllers: [SignUpController],
  providers: [TokenGenerateService]
})
export default class SignUpModule {}
