import { ApiProperty } from "@nestjs/swagger";
import { TeamType } from "src/constansts/team.type";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Team } from "../team/team";

@Entity()
export class League {
    
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    name: string;

    @ApiProperty()
    @Column()
    maxTeams: number;

    @ApiProperty()
    @Column({
        type: "enum",
        enum: TeamType
    })
    teamType: TeamType;

    @ApiProperty()
    @OneToMany(() => Team, teams => teams.league, {nullable: true})
    teams: Team[]
}