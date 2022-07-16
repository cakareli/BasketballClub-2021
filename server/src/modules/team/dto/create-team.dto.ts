import { IsNotEmpty } from "class-validator"
import { TeamType } from "src/constansts/team.type"
import { Club } from "src/modules/club/entities/club.entity"
import { Coach } from "src/modules/coach/entities/coach.entity"
import { League } from "src/modules/league/entities/league.entity"
import { Player } from "src/modules/player/entities/player.entity"

export class CreateTeamDto {

    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    type: TeamType

    player: Player[]

    @IsNotEmpty()
    club: Club

    league: League

    coaches: Coach[]
}
