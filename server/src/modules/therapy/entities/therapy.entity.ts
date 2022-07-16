import { ApiProperty } from "@nestjs/swagger";
import { Physiotherapist } from "src/modules/physiotherapist/entities/physiotherapist.entity";
import { Player } from "src/modules/player/entities/player.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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