import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Category } from "src/models/Category";
import { Questionnaire } from "src/models/Questionnaire";
import { Question } from "src/models/Quesion";

import { CategoryService } from "./category.service";
import { QuestionnairiesService } from "./questionnairies.service";
import { QuestionsService } from "./questions.service";

import { CategoryController } from "./category.controller";
import { QuestionnairiesController } from "./questionnairies.controller";
import { QuestionsController } from "./questions.controller";
import { UploaderController } from "./uploader.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([Category, Questionnaire, Question]),
    ],
    exports: [TypeOrmModule],
    controllers: [
        CategoryController,
        QuestionnairiesController,
        QuestionsController,
        UploaderController
    ],
    providers: [
        CategoryService,
        QuestionnairiesService,
        QuestionsService,
    ],
})
export class QuestionnairiesModule {

}