import { response } from 'express';


saveToken(token: string): void {
  response.cookie('token', token);

}

