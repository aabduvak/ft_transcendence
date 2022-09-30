import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Users } from './users/users.entity'
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'pong',
    username: 'postgres',
    password: 'roof',
    entities: [Users],
    migrations: [],
    synchronize: true
  }), UsersModule, HttpModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
