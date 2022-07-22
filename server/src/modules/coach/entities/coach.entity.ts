import { ApiProperty } from "@nestjs/swagger";
import { CoachTypes } from "src/constansts/coach.types";
import { Team } from "src/modules/team/entities/team.entity";
import { User } from "src/modules/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Coach {

    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
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