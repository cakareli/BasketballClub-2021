import { IsNotEmpty } from "class-validator"

export class CreateWorktimeDto {

    @IsNotEmpty()
    start: string

    @IsNotEmpty()
    end: string
}
