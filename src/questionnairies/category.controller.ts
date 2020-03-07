import { Controller, Get, Post, Body, Put, Param, Delete } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { QuestionnairiesService } from "./questionnairies.service";

@Controller('categories')
export class CategoryController {

    constructor(
        private readonly categoryService: CategoryService,
        private readonly questionnairiesService: QuestionnairiesService,
    ) {}

    @Get()
    findAll() {
        return this.categoryService.getCategories();
    }

    @Post()
    createCategory(@Body() category) {
        return this.categoryService.createCategory(category);
    }

    @Put(':id')
    editCategory(@Param('id') id: number, @Body() data) {
        return this.categoryService.updateCategory(id, data);
    }

    @Get(':id')
    getById(@Param('id') id: number) {
        return this.categoryService.getById(id);
    }

    @Delete(':id')
    deleteCategory(@Param('id') id: number) {
        return this.categoryService.deleteCategory(id);
    }

    @Get(':id/questionnairies')
    getQuestionnairies(@Param('id') id: number) {
        return this.questionnairiesService.getQuestionnairies({categoryId: id})
    }
}