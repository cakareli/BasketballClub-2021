import { ApiProperty } from "@nestjsx/crud/lib/crud";
import { TrainingStatus } from "src/constansts/training.status";
import { Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Equipment } from "../equipment/equipment";
import { Team } from "../team/team";

@Entity()
export class Training {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    startTime: string;

    @ApiProperty()
    @Column()
    endTime: string;

    @ApiProperty()
    @ManyToOne(() => Team)
    @JoinTable()
    team: Team; 

    @ApiProperty()
    @Column({
        type: "enum",
        enum: TrainingStatus
    })
    status: TrainingStatus;

    // @ApiProperty()
    // @OneToMany(() => Equipment, equipment => equipment)
    // @JoinColumn()
    // equipment: Equipment[];    
}