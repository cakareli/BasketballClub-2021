import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Therapy } from "../therapy/therapy";
import { User } from "../user/user";
import { WorkTime } from "../worktime/worktime";

@Entity()
export class Physiotherapist {

    @PrimaryGeneratedColumn()
    physiotherapistId: number;

    @Column(() => User)
    user: User;

    @ManyToOne(() => WorkTime, {nullable: true})
    @JoinColumn()
    workTime: WorkTime;

    @OneToMany(() => Therapy, therapy => therapy.physiotherapist)
    therapies: Therapy[];
}