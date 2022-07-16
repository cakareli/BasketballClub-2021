import { ApiProperty } from "@nestjs/swagger";
import { TeamType } from "src/constansts/team.type";
import { Club } from "src/modules/club/entities/club.entity";
import { Coach } from "src/modules/coach/entities/coach.entity";
import { League } from "src/modules/league/entities/league.entity";
import { Player } from "src/modules/player/entities/player.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";


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
    players: Player[];

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
