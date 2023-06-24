import { Controller, Post, Query } from '@nestjs/common';
import TokenGenerateService from './signup.service';

@Controller('signup')
class SignUpController {
  constructor(private readonly tokenService: TokenGenerateService) {}

  @Post()
  async get(
    @Query('input1') userName: string,
    @Query('input2') password: string
  ): Promise<void> {
    await this.tokenService.generateToken(userName, password);
  }
}

export default SignUpController;
