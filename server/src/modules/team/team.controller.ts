import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Team } from './team';
import { TeamService } from './team.service';

@Crud({
    model: {
        type: Team
    }
})
@Controller('team')
@ApiTags('Team')
export class TeamController implements CrudController<Team> {
    constructor(public service: TeamService) {}
}
