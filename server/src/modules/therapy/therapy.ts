import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Physiotherapist } from "../physiotherapist/physiotherapist";
import { Player } from "../player/player";

@Entity()
export class Therapy {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    startTime: string;

    @ApiProperty()
    @Column()
    endTime: string;

    @ApiProperty()
    @ManyToOne(() => Physiotherapist, physiotherapist => physiotherapist.therapies)
    @JoinColumn()
    physiotherapist: Physiotherapist;

    @ApiProperty({type: () => Player})
    @OneToMany(() => Player, player => player.therapies)
    player: Player; 
    
}