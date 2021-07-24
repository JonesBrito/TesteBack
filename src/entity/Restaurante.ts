import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Restaurante {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nomeRestaurante: string;

    @Column()
    endereco: string;

}
