import { Injectable } from '@nestjs/common';
import jwt, { SignOptions } from 'jsonwebtoken';

@Injectable()
class TokenService {
  private readonly secretKey: string = 'qwertyuiopasdfghjklñzxcvbnm';

  generateToken(username: string, password: string, expires: number): object {
    const payload = { username, password };
    const options: SignOptions = { expiresIn: expires };

    const token: string = jwt.sign(payload, this.secretKey, options);

    return { payload, options, token };
  }

  verifyToken(token: string): jwt.JwtPayload {
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

export default TokenService;
