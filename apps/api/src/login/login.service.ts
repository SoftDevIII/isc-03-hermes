import { Inject, Injectable } from '@nestjs/common';
import { Request } from 'express';
import jwt, { Jwt } from 'jsonwebtoken';

@Injectable()
class TokenVerifyService {
  constructor(
    private jwtService: Jwt,
    @Inject('REQUEST') private request: Request,
    @Inject('RESPONSE') private response: Response
  ) {}

  private readonly secretKey: string = 'qwertyuiopasdfghjklñzxcvbnm';

  private readonly expireTime: number = 123;

  verifyToken(token = this.request.cookies['jwt']): jwt.JwtPayload {
    try {
      const verify: jwt.JwtPayload = jwt.verify(
        token,
        this.secretKey
      ) as jwt.JwtPayload;
      return verify;
    } catch (error) {
      return null;
    }
  }
}

export default TokenVerifyService;
