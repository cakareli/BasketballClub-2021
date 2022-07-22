import { IsNotEmpty } from "class-validator"

export class CreateEquipmentDto {

    @IsNotEmpty()
    name: string

    amount: number
}
