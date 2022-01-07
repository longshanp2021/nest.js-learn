import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true})
    account: string;

    @Column({ nullable: true })
    password: string;

    @Column({ nullable: true })
    name: string;

    @CreateDateColumn({ name: 'create_time', nullable: true })
    createTime: string;

    @UpdateDateColumn({ name: 'update_time', nullable: true })
    updateTime: string;

}
