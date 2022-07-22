import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/modules/user/entities/user.entity";
import { WorkTime } from "src/modules/worktime/entities/worktime.entity";
import { Entity, ManyToOne, JoinColumn, Column, PrimaryGeneratedColumn } from "typeorm";


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