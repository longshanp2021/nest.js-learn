import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Book {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    price: number;

}
