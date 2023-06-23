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
    @Query('input2') input2: string
  ): string {
    const expiresIn = 2;
    const token = this.tokenService.generateToken(input1, input2, expiresIn);
    return token;
  }
}

export default LoginController;
