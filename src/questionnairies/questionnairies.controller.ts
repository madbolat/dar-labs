import { Controller, Get, Post, Body, Put, Param } from "@nestjs/common";
import { QuestionnairiesService } from "./questionnairies.service";
import { QuestionsService } from "./questions.service";

@Controller('questionnairies')
export class QuestionnairiesController {

    constructor(
        private readonly questionnairiesService: QuestionnairiesService,
        private readonly questionsService: QuestionsService
    ) {}

    @Get()
    findAll() {
        return this.questionnairiesService.getQuestionnairies();
    }

    @Post()
    createQuestionnairies(@Body() questionnaire) {
        return this.questionnairiesService.createQuestionnairies(questionnaire);
    }

    @Put(':id')
    editQuestionnairies(@Param('id') id: number, @Body() data) {
        return this.questionnairiesService.updateQuestionnaire(id, data);
    }

    @Get(':id')
    getById(@Param('id') id: number) {
        return this.questionnairiesService.getById(id);
    }

    @Get(':id/questions')
    getQuestions(@Param('id') id: number) {
        return this.questionsService.getQuestions(id)
    }
}