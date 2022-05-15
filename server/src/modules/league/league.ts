import { TeamType } from "src/constansts/team.type";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Team } from "../team/team";

@Entity()
export class League {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    maxTeams: number;

    @Column({
        type: "enum",
        enum: TeamType
    })
    teamType: TeamType;

    @OneToMany(() => Team, teams => teams.league, {nullable: true})
    teams: Team[]
}