import { 
    BeforeInsert, 
    BeforeUpdate, 
    Column, 
    CreateDateColumn, 
    Entity, 
    JoinColumn, 
    OneToOne, 
    PrimaryGeneratedColumn
} from "typeorm";
import { hashSync } from "bcrypt";
import { Person } from "./Person";
@Entity("users")
export class User {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    photo: string;

    @Column()
    phone: string;

    @Column()
    document: string;

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