import { Injectable } from "@nestjs/common";
import { Questionnaire } from "src/models/Questionnaire";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class QuestionnairiesService {

    constructor(
        @InjectRepository(Questionnaire)
        private readonly questionnaireRepository: Repository<Questionnaire>
    ) {}

    getQuestionnairies(criteria = {}) {
        return this.questionnaireRepository.find(criteria);
    }

    createQuestionnairies(questionnaire: Questionnaire) {
        return this.questionnaireRepository.save(questionnaire);
    }

    updateQuestionnaire(id: number, data: Partial<Questionnaire>) {
        return this.questionnaireRepository.update(id, data);
    }

    getById(id: number) {
        return this.questionnaireRepository.findOne(id);
    }
}