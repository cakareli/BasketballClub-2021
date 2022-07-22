import { ApiProperty } from "@nestjsx/crud/lib/crud";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Exclude } from "class-transformer";
import { UserRole } from "src/constansts/user.roles";
import { Club } from "src/modules/club/entities/club.entity";

@Entity({name: 'users'})
export class User {

    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
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

    @Exclude()
    @Column({nullable: true})
    refreshToken: string

    @ApiProperty()
    @Column({
        type: "enum",
        enum: UserRole,
        nullable: true
    })
    role: UserRole;

    @ApiProperty()
    @ManyToOne(() => Club, {onDelete: 'SET NULL'})
    @JoinColumn({name: "clubId"})
    club: Club;


}