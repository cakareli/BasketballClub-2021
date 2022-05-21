import { ApiProperty } from "@nestjsx/crud/lib/crud";
import { UserRole } from "src/constansts/user.roles";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Club } from "../club/club";

@Entity({name: 'users'})
export class User {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({unique: true})
    email: string;

    @ApiProperty()
    @Column()
    password: string;

    @ApiProperty()
    @Column()
    firstName: string;

    @ApiProperty()
    @Column()
    lastName: string;

    @ApiProperty()
    @Column({
        type: "enum",
        enum: UserRole,
    })
    role: UserRole;

    @ApiProperty()
    @ManyToOne(() => Club, {onDelete: 'SET NULL'})
    @JoinColumn({name: "clubId"})
    club: Club;
}