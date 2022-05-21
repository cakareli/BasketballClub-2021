import { ApiProperty } from "@nestjs/swagger";
import { CoachTypes } from "src/constansts/coach.types";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Team } from "../team/team";
import { User } from "../user/user";

@Entity()
export class Coach {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    coachId: number;

    @ApiProperty()
    @Column({
        type: "enum",
        enum: CoachTypes
    })
    type: CoachTypes;

    @ApiProperty()
    @Column(() => User)
    user: User;
    
    @ApiProperty()
    @ManyToOne(() => Team, {nullable: true})
    @JoinColumn({name: 'teamId'})
    team: Team;
}