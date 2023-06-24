import { Inject, Injectable } from '@nestjs/common';
import { Request, response } from 'express';
import jwt, { Jwt, SignOptions } from 'jsonwebtoken';

@Injectable()
class TokenGenerateService {
  constructor(
    private jwtService: Jwt,
    @Inject('REQUEST') private request: Request,
    @Inject('RESPONSE') private response: Response
  ) {}

  private readonly secretKey: string = 'qwertyuiopasdfghjklñzxcvbnm';

  private readonly expireTime: number = 123;

  generateToken(username: string, password: string): void {
    const payload = { username, password };
    const options: SignOptions = { expiresIn: this.expireTime };

    const token: string = jwt.sign(payload, this.secretKey, options);

    response.cookie('jwt', token);
  }
}

export default TokenGenerateService;
