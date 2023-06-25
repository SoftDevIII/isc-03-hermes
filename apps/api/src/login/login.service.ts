import { Inject, Injectable } from '@nestjs/common';
import { Request } from 'express';
import Jwt from 'passport-jwt';

@Injectable()
class TokenVerifyService {
  constructor(
    private jwtService: Jwt,
    @Inject('REQUEST') private myRequest: Request,
    @Inject('RESPONSE') private myResponse: Response
  ) {}

  private readonly secretKey: string = 'qwertyuiopasdfghjklñzxcvbnm';

  private readonly expireTime: number = 123;

  verifyToken(
    token: string = this.myRequest.cookies.jwt as string
  ): Jwt.Payload {
    try {
      if (token) {
        const verify: Jwt.Payload = Jwt.verify(
          token,
          this.secretKey
        ) as Jwt.Payload;
        return verify;
      }
      return null;
    } catch (error) {
      return null;
    }
  }
}

export default TokenVerifyService;
