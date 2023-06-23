import { Module } from '@nestjs/common';
import LoginController from './jwt.controller';
import TokenService from './jwt.service';

@Module({
  controllers: [LoginController],
  providers: [TokenService]
})
export default class LoginModule {}
