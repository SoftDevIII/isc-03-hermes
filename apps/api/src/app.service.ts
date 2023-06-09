import { Injectable } from '@nestjs/common';

@Injectable()
class AppService {
  hello = 'Hello World!';

  getHello(): string {
    return this.hello;
  }
}

export default AppService;
