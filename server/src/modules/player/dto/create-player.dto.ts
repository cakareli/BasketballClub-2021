import { IsNotEmpty } from "class-validator";
import { PlayerPosition } from "src/constansts/player.positions";
import { Team } from "src/modules/team/entities/team.entity";
import { Therapy } from "src/modules/therapy/entities/therapy.entity";
import { User } from "src/modules/user/entities/user.entity";

export class CreatePlayerDto {

    @IsNotEmpty()
    user: User

    @IsNotEmpty()
    position: PlayerPosition

    @IsNotEmpty()
    age: number

    @IsNotEmpty()
    team: Team

    @IsNotEmpty()
    injured: boolean

    @IsNotEmpty()
    therapies: Therapy[]
}
