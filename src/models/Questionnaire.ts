import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Category } from "./Category";

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
}