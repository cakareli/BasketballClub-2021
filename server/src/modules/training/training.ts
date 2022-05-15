import { TrainingStatus } from "src/constansts/training.status";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Coach } from "../coach/coach";
import { Equipment } from "../equipment/equipment";
import { Team } from "../team/team";

@Entity()
export class Training {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    startTime: string;

    @Column()
    endTime: string;

    @ManyToOne(() => Team)
    @JoinTable()
    team: Team; 

    @Column({
        type: "enum",
        enum: TrainingStatus
    })
    status: TrainingStatus;

    @OneToMany(() => Equipment, equipment => equipment)
    @JoinColumn()
    equipment: Equipment[];    
}