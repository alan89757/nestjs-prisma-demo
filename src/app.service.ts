import { Injectable } from '@nestjs/common';
import { IForm } from './app.d'

@Injectable()
export class AppService {
  getList(): string {
    return 'Hello List!';
  }
  getUsername(): string {
    return 'Hello username!';
  }
  submit(): IForm {
    return {
      errCode: 0,
      data: []
    };
  }
}
