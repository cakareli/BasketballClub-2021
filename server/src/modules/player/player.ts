import { ApiProperty } from "@nestjs/swagger";
import { type } from "os";
import { PlayerPosition } from "src/constansts/player.positions";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Team } from "../team/team";
import { Therapy } from "../therapy/therapy";
import { User } from "../user/user";

@Entity()
export class Player  {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    playerId: number;

    @ApiProperty()
    @Column(() => User)
    user: User;

    @ApiProperty()
    @Column({
        type:"enum",
        enum: PlayerPosition
    })
    position: PlayerPosition;

    @ApiProperty()
    @Column()
    age: number;

    @ApiProperty( {type: () => Team})
    @ManyToOne(() => Team)
    @JoinColumn({name: 'teamId'})
    team: Team;

    @ApiProperty()
    @Column({nullable: true})
    injured: boolean;

    @ApiProperty()
    @ManyToOne(() => Therapy, therapy => therapy.player, {nullable: true})
    @JoinColumn()
    therapies: Therapy[];
}