import { IsEmail, IsNotEmpty, Length } from "class-validator";
import { UserRole } from "src/constansts/user.roles";
import { Club } from "src/modules/club/entities/club.entity";

export class CreateUserDto {

    @IsNotEmpty({message: 'email can not be empty'})   
    @IsEmail()
    email: string;

    @IsNotEmpty({message: 'password can not be empty'})   
    @Length(3,20)
    password: string;

    @IsNotEmpty({message: 'firstName can not be empty'})   
    @Length(2, 20)
    firstName: string;

    @IsNotEmpty({message: 'lastName can not be empty'})   
    @Length(2, 20)
    lastName: string;

    refreshToken: string

    role: UserRole;

    club: Club;
}
