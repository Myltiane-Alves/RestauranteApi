import internal from "stream";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('person')
export class Person {
    [x: string]: any;
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    birthAt: Date;

    @Column()
    phone: string;

    @Column()
    document: string;
    
    @CreateDateColumn()
    createdAt: Date;

    @CreateDateColumn()
    updatedAt: Date;

}