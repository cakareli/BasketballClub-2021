import { UserRole } from "src/constansts/user.roles";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Club } from "../club/club";

@Entity({name: 'users'})
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({
        type: "enum",
        enum: UserRole,
    })
    role: UserRole;

    @ManyToOne(() => Club, {onDelete: 'SET NULL'})
    @JoinColumn({name: "clubId"})
    club: Club;
}