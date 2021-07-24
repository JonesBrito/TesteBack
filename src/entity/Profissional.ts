import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Profissional {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nomeProfissional: string;

    @Column()
    telefone: string;

}
