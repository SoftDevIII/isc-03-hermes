import { Module } from '@nestjs/common';
import LoginController from './login.controller';
import TokenVerifyService from './login.service';

@Module({
  controllers: [LoginController],
  providers: [TokenVerifyService]
})
export default class LoginModule {}
