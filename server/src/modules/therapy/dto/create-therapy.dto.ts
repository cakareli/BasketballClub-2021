import { IsNotEmpty } from "class-validator"
import { Physiotherapist } from "src/modules/physiotherapist/entities/physiotherapist.entity"
import { Player } from "src/modules/player/entities/player.entity"

export class CreateTherapyDto {

    @IsNotEmpty()
    startTime: string

    @IsNotEmpty()
    endTime: string

    @IsNotEmpty()
    physiotherapist: Physiotherapist

    @IsNotEmpty()
    player: Player
}
