import { Injectable } from '@nestjs/common';
import jwt, { SignOptions } from 'jsonwebtoken';

@Injectable()
class TokenService {
  private readonly secretKey: string = 'your_secret_password';

  generateToken(username: string, password: string, expires: number): string {
    const payload = { username, password };
    const options: SignOptions = { expiresIn: expires };

    const token: string = jwt.sign(payload, this.secretKey, options);

    return token;
  }
}

export default TokenService;
