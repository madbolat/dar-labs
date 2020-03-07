import { Controller, Get, Param, Post, Body, Put, Delete } from "@nestjs/common";
import { QuestionsService } from "./questions.service";

@Controller('questions')
export class QuestionsController {

    constructor(
        private readonly questionsService: QuestionsService
    ) {}

    @Get(':id')
    getQuestions(@Param('id') id: number) {
        return this.questionsService.getQuestions(id);
    }

    @Post()
    createQuestion(@Body() question) {
        return this.questionsService.createQuestion(question);
    }

    @Put(':id')
    editQuestion(@Param('id') id: number, @Body() data) {
        return this.questionsService.updateQuestion(id, data);
    }
    
    @Delete(':id')
    deleteQuestion(@Param('id') id: number) {
        return this.questionsService.deleteQuestion(id);
    }
}