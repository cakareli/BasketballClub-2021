import { IsNotEmpty } from "class-validator";
import { CoachTypes } from "src/constansts/coach.types";
import { Team } from "src/modules/team/entities/team.entity";
import { User } from "src/modules/user/entities/user.entity";

export class CreateCoachDto {

    @IsNotEmpty()
    type: CoachTypes;

    @IsNotEmpty()
    user: User;

    @IsNotEmpty()
    team: Team;
}
