import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Loja {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nomeLoja: string;

    @Column()
    endereco: string;
}
