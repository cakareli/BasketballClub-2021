import { IsNotEmpty } from "class-validator"
import { TeamType } from "src/constansts/team.type"
import { Team } from "src/modules/team/entities/team.entity"

export class CreateLeagueDto {

    @IsNotEmpty()
    name: string
    
    @IsNotEmpty()
    maxTeams: number

    teamType: TeamType

    teams: Team[]
}
