import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class WorkTime {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;
    
    @ApiProperty()
    @Column()
    start: string;

    @ApiProperty()
    @Column()
    end: string;
}