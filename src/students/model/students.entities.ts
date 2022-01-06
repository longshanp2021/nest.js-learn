import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Students {
    @PrimaryGeneratedColumn()//uuid可以自动生成id数据
    id: string;

    @Column(
        // {name:'',
        // type:"timestamp",
        // nullable:true,
        // comment:""}
    )
    name: string;

    @Column()
    age: number

    // @Column({ name: 'createtime' })
    // createTime: string;
}