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
    @Query('input1') input1: string,
    @Query('input2') input2: string,
    @Query('input3') input3: number
  ): object {
    const token: object = this.tokenService.generateToken(
      input1,
      input2,
      input3
    );
    return token;
  }
}

export default LoginController;
