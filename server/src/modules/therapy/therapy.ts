import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Physiotherapist } from "../physiotherapist/physiotherapist";
import { Player } from "../player/player";

@Entity()
export class Therapy {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    startTime: string;

    @Column()
    endTime: string;

    @ManyToOne(() => Physiotherapist, physiotherapist => physiotherapist.therapies)
    @JoinColumn()
    physiotherapist: Physiotherapist;

    @OneToMany(() => Player, player => player.therapies)
    player: Player; 
    
}