import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Therapy } from "../therapy/therapy";
import { User } from "../user/user";
import { WorkTime } from "../worktime/worktime";

@Entity()
export class Physiotherapist {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    physiotherapistId: number;

    @ApiProperty()
    @Column(() => User)
    user: User;

    @ApiProperty()
    @ManyToOne(() => WorkTime, {nullable: true})
    @JoinColumn()
    workTime: WorkTime;

    @ApiProperty()
    @OneToMany(() => Therapy, therapy => therapy.physiotherapist)
    therapies: Therapy[];
}