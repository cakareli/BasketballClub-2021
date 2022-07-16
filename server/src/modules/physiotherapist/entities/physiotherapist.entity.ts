import { ApiProperty } from "@nestjs/swagger";
import { Therapy } from "src/modules/therapy/entities/therapy.entity";
import { User } from "src/modules/user/entities/user.entity";
import { WorkTime } from "src/modules/worktime/entities/worktime.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Physiotherapist {

    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
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