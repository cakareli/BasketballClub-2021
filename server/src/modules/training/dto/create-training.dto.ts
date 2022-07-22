import { IsNotEmpty } from "class-validator"
import { TrainingStatus } from "src/constansts/training.status"
import { Team } from "src/modules/team/entities/team.entity"

export class CreateTrainingDto {

    @IsNotEmpty()
    startTime: string

    @IsNotEmpty()
    endTime: string

    @IsNotEmpty()
    team: Team

    @IsNotEmpty()
    status: TrainingStatus

}
