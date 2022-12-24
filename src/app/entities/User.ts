import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { hashSync } from "bcrypt";
@Entity("users")
export class User {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    photo: string;
    
    @Column()
    personId: number;

    @CreateDateColumn()
    createdAt: Date;

    @CreateDateColumn()
    updatedAt: Date;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        this.password = hashSync(this.password, 8)
    }
}