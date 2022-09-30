import { Controller, Get, Post, Query } from '@nestjs/common';
import { Users } from './users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ) {}
    
    @Get('insert')
    addUser() {
        var user2: Users = new Users();
        user2.login = "deneme";
        user2.fullname = "deneme";
        user2.email = "deneme@gmail.com";
        this.usersService.addUser(user2);
    }

    @Get()
    getMain() {
        var name: Promise<Users[]> = this.usersService.findAll();
        return name.then(value => value[0]['username']); 
    }
}