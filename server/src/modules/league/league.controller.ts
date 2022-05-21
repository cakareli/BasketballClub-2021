import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { League } from './league';
import { LeagueService } from './league.service';


@Crud({
    model: {
        type: League
    }
})
@Controller('league')
@ApiTags('League')
export class LeagueController implements CrudController<League> {
    constructor(public service: LeagueService){}
}
