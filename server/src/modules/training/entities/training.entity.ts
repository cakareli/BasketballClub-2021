import { ApiProperty } from "@nestjsx/crud/lib/crud";
import { TrainingStatus } from "src/constansts/training.status";
import { Team } from "src/modules/team/entities/team.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


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