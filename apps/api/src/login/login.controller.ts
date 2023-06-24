import { Controller, Get } from '@nestjs/common';
import TokenVerifyService from './login.service';

@Controller('login')
class LogInController {
  constructor(private readonly tokenService: TokenVerifyService) {}

  @Get()
  verifyTokenFromCookie(): boolean {
    const token = this.tokenService.verifyToken();
    if (token) {
      return true;
    } else {
      return false;
    }
  }
}

export default LogInController;
