import { Entity, ManyToOne, JoinColumn, Column, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../user/user";
import { WorkTime } from "../worktime/worktime";

@Entity()
export class Staff {

    @PrimaryGeneratedColumn()
    staffId: number;

    @ManyToOne(() => WorkTime, {nullable: true})
    @JoinColumn()
    workTime: WorkTime;

    @Column(() => User)
    user: User;
}