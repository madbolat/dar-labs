import { Module } from '@nestjs/common';
import {TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UsersModule } from './users/users.module';
import { QuestionnairiesModule } from './questionnairies/questionnairies.module';

import { User } from './models/User';
import { Category } from './models/Category';
import { Questionnaire } from './models/Questionnaire';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '217.182.72.53',
      username: 'miras',
      password: 'xO5A7IvE',
      database: 'madyarDB',
      entities: [User, Category, Questionnaire],
      synchronize: false,
    }),
    UsersModule,
    QuestionnairiesModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [AppService],
})
export class AppModule {}
