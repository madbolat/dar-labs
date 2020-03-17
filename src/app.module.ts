import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';

import { UsersModule } from './users/users.module';
import { QuestionnairiesModule } from './questionnairies/questionnairies.module';

import { User } from './models/User';
import { Category } from './models/Category';
import { Questionnaire } from './models/Questionnaire';
import { Question } from './models/Quesion';

import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '217.182.72.53',
      username: 'miras',
      password: 'xO5A7IvE',
      database: 'madyarDB',
      entities: [User, Category, Questionnaire, Question],
      synchronize: false,
    }),
    UsersModule,
    QuestionnairiesModule,
    MulterModule.register({
      dest: './uploads'
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads')
    })
  ],
  controllers: [
    AppController,
  ],
  providers: [AppService],
})
export class AppModule {}
