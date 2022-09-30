import { Controller, Get, Param, Put, Body, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpService } from '@nestjs/axios';
import { UsersService } from './users/users.service';
import { Users } from './users/users.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly usersService: UsersService
  ) {}

  @Get()
  async getMain() {
    return this.appService.getMain();
  }

  @Get('signin')
    async signIn(@Query('code') code:string) {
      return await this.appService.signIn(code);
  }

  @Post('/update')
  async updateUser(@Body() params: Users) {
    return await this.usersService.udpate(params.id, params);
  }
}
