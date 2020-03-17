import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Questionnaire } from "./Questionnaire";

@Entity({name: 'categories'})
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    imageUrl: string;

    @OneToMany(type => Questionnaire, questionnaire => questionnaire.categoryId)
    questionnairies: Promise<Questionnaire[]>;
}