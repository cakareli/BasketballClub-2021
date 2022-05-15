import { CoachTypes } from "src/constansts/coach.types";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Team } from "../team/team";
import { User } from "../user/user";

@Entity()
export class Coach {

    @PrimaryGeneratedColumn()
    coachId: number;

    @Column({
        type: "enum",
        enum: CoachTypes
    })
    type: CoachTypes;

    @Column(() => User)
    user: User;
    
    @ManyToOne(() => Team, {nullable: true})
    @JoinColumn({name: 'teamId'})
    team: Team;
}