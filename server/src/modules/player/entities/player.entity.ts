import { ApiProperty } from "@nestjs/swagger";
import { PlayerPosition } from "src/constansts/player.positions";
import { Team } from "src/modules/team/entities/team.entity";
import { Therapy } from "src/modules/therapy/entities/therapy.entity";
import { User } from "src/modules/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Player  {

    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
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