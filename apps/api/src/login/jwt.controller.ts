import { Controller, Post, Query } from '@nestjs/common';
import TokenService from './jwt.service';

@Controller('login')
class LoginController {
  private readonly tokenService: TokenService;

  constructor() {
    this.tokenService = new TokenService();
  }

  @Post()
  get(
    @Query('input1') userName: string,
    @Query('input2') password: string,
    @Query('input3') expirationsTime: number
  ): object {
    const token: object = this.tokenService.generateToken(
      userName,
      password,
      expirationsTime
    );
    return token;
  }
}

export default LoginController;
