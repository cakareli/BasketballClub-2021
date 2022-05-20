import { ApiProperty } from "@nestjs/swagger";
import { Entity, ManyToOne, JoinColumn, Column, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../user/user";
import { WorkTime } from "../worktime/worktime";

@Entity()
export class Staff {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    staffId: number;

    @ApiProperty()
    @ManyToOne(() => WorkTime, {nullable: true})
    @JoinColumn()
    workTime: WorkTime;

    @ApiProperty()
    @Column(() => User)
    user: User;
}