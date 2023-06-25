import { Inject, Injectable } from '@nestjs/common';
import { Request, response } from 'express';
import Jwt from 'passport-jwt';
@Injectable()
class TokenGenerateService {
  constructor(
    private jwtService: Jwt,
    @Inject('REQUEST') private myRequest: Request,
    @Inject('RESPONSE') private myResponse: Response
  ) {}

  private readonly secretKey: string = 'qwertyuiopasdfghjklñzxcvbnm';

  private readonly expireTime: number = 123;

  generateToken(username: string, password: string): void {
    const payload = { username, password };
    const options: Jwt.SignOptions = { expiresIn: this.expireTime };

    const token: string = Jwt.sign(payload, this.secretKey, options);

    response.cookie('jwt', token);
  }
}

export default TokenGenerateService;
