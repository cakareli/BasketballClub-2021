import { TeamType } from "src/constansts/team.type";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Club } from "../club/club";
import { Coach } from "../coach/coach";
import { League } from "../league/league";
import { Player } from "../player/player";

@Entity()
export class Team {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({
        type: "enum",
        enum: TeamType
    })
    type: TeamType;

    @OneToMany(() => Player, player => player.team, {onDelete: 'SET NULL', nullable: true})
    @JoinColumn({name: 'playerId'})
    player: Player[];

    @ManyToOne(() => Club)
    @JoinColumn({name: 'clubId'})
    club: Club;

    @ManyToOne(() => League, {nullable: true})
    @JoinColumn()
    league: League;

    @OneToMany(() => Coach, coach => coach.team)
    @JoinColumn()
    coaches: Coach[];
}