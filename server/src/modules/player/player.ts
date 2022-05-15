import { PlayerPosition } from "src/constansts/player.positions";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Team } from "../team/team";
import { Therapy } from "../therapy/therapy";
import { User } from "../user/user";

@Entity()
export class Player  {

    @PrimaryGeneratedColumn()
    playerId: number;

    @Column(() => User)
    user: User;

    @Column({
        type:"enum",
        enum: PlayerPosition
    })
    position: PlayerPosition;

    @Column()
    age: number;

    @ManyToOne(() => Team, team => team.player)
    @JoinColumn({name: 'teamId'})
    team: Team;

    @Column({nullable: true})
    injured: boolean;

    @ManyToOne(() => Therapy, therapy => therapy.player, {nullable: true})
    @JoinColumn()
    therapies: Therapy[];
}