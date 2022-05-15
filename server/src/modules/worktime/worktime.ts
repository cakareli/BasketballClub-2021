import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class WorkTime {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    start: string;

    @Column()
    end: string;
}