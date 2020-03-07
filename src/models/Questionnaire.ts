import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Category } from "./Category";
import { Question } from "./Quesion";

@Entity('questionnairies')
export class Questionnaire {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    categoryId: number;

    // @ManyToOne(type => Category, category => category.id, {eager: true})
    // eager: true returns child table's data too
    @ManyToOne(type => Category, category => category.id)
    category: Category;

    @OneToMany(type => Question, question => question.id)
    questions: Promise<Question[]>;
}