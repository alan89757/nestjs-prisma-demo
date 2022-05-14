import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { IForm } from './app.d'

@Controller("app")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("list")
  getList(): string {
    return this.appService.getList();
  }
  @Get("username")
  getUsername(): string {
    return this.appService.getUsername();
  }
  @Post("submit") 
  submit(): IForm {
    return this.appService.submit();
  }
}
