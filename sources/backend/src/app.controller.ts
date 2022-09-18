import { Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpService } from '@nestjs/axios';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getMain() {
    return "welcome to the world where there are no users";
  }

  @Get('signin')
    async makeGet(@Query('code') code:string) {
        if (code != undefined)
            return await this.appService.serviceGet(code);
        return this.getMain();
    }
}
