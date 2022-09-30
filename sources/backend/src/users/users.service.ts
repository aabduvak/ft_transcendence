import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
    ) {}

    findAll(): Promise<Users[]> {
        return this.usersRepository.find();
    }

    findOne(id: number): Promise<Users> {
        return this.usersRepository.findOneBy({ id });
    }

    async removeById(id: number) {
        await this.usersRepository.delete(id);
    }

    async addUser(user: Users) {
        await this.usersRepository.insert(user);
    }

    async udpate(id: number, updatedUser: Users) {
        var user = await this.usersRepository.findOneByOrFail({ id });
        if (user)
            await this.usersRepository.update(user.id, updatedUser);
    }

}