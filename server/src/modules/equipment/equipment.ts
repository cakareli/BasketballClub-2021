import { ApiProperty } from "@nestjsx/crud/lib/crud";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Equipment {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    name: string;

    @ApiProperty()
    @Column({nullable: true})
    amount: number;
    
}