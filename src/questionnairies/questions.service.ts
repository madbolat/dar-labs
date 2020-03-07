import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Question } from "src/models/Quesion";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class QuestionsService {
    constructor(
        @InjectRepository(Question)
        private readonly questionsRepository: Repository<Question>
    ) {}

    getQuestions(id: number) {
        return this.questionsRepository.find({where: {questionnaireId: id}})
    }

    createQuestion(question: Question) {
        return this.questionsRepository.save(question);
    }

    updateQuestion(id: number, data: Partial<Question>) {
        return this.questionsRepository.update(id, data);
    }

    deleteQuestion(id: number) {
        return this.questionsRepository.delete(id);
    }
}