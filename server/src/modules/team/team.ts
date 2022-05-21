import { ApiProperty } from "@nestjs/swagger";
import { TeamType } from "src/constansts/team.type";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Club } from "../club/club";
import { Coach } from "../coach/coach";
import { League } from "../league/league";
import { Player } from "../player/player";

@Entity()
export class Team {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    name: string;

    @ApiProperty()
    @Column({
        type: "enum",
        enum: TeamType
    })
    type: TeamType;

    @ApiProperty()
    @OneToMany(() => Player, player => player.team, {onDelete: 'SET NULL', nullable: true})
    player: Player[];

    @ApiProperty()
    @ManyToOne(() => Club)
    @JoinColumn({name: 'clubId'})
    club: Club;

    @ApiProperty()
    @ManyToOne(() => League, {nullable: true})
    @JoinColumn()
    league: League;

    @ApiProperty()
    @OneToMany(() => Coach, coach => coach.team)
    @JoinColumn()
    coaches: Coach[];
}