import { IsNotEmpty } from "class-validator";
import { Therapy } from "src/modules/therapy/entities/therapy.entity";
import { User } from "src/modules/user/entities/user.entity";
import { WorkTime } from "src/modules/worktime/entities/worktime.entity";

export class CreatePhysiotherapistDto {

    @IsNotEmpty()
    user: User

    workTime: WorkTime
    
    therapies: Therapy[]
}
