import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "src/models/Category";
import { Questionnaire } from "src/models/Questionnaire";
import { CategoryService } from "./category.service";
import { CategoryController } from "./category.controller";
import { QuestionnairiesService } from "./questionnairies.service";
import { QuestionnairiesController } from "./questionnairies.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([Category, Questionnaire]),
    ],
    exports: [TypeOrmModule],
    controllers: [
        CategoryController,
        QuestionnairiesController,
    ],
    providers: [
        CategoryService,
        QuestionnairiesService,
    ],
})
export class QuestionnairiesModule {

}