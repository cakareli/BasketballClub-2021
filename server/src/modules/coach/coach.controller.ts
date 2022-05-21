import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Coach } from './coach';
import { CoachService } from './coach.service';

@Crud({
    model: {
        type: Coach
    }
})
@Controller('coach')
@ApiTags('Coach')
export class CoachController implements CrudController<Coach> {
    constructor(public service: CoachService) {}
}
