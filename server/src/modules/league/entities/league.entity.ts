import { ApiProperty } from "@nestjs/swagger";
import { TeamType } from "src/constansts/team.type";
import { Team } from "src/modules/team/entities/team.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class League {
    
    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
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