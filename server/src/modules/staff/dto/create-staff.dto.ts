import { IsNotEmpty } from "class-validator";
import { User } from "src/modules/user/entities/user.entity";
import { WorkTime } from "src/modules/worktime/entities/worktime.entity";

export class CreateStaffDto {

    workTime: WorkTime

    @IsNotEmpty()
    user: User
}
