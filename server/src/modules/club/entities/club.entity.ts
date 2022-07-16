import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Club {
    
    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @ApiProperty()
    @Column()
    name: string;
} 