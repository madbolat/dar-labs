import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Questionnaire } from "./Questionnaire";

@Entity({name: 'questions'})
export class Question {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    questionnaireId: number;

    @Column()
    title: string;

    @Column()
    text: string;

    @Column()
    score: number;

    @ManyToOne(type => Questionnaire, questionnaire => questionnaire.id)
    questionnaire: Questionnaire;
}