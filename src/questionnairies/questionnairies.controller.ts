import { Controller, Get, Post, Body, Put, Param } from "@nestjs/common";
import { QuestionnairiesService } from "./questionnairies.service";

@Controller('questionnairies')
export class QuestionnairiesController {

    constructor(
        private readonly questionnairiesService: QuestionnairiesService
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
}