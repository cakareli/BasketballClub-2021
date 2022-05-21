import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Club } from './club';
import { ClubService } from './club.service';

@Crud({
    model: {
        type: Club
    }
})
@Controller('club')
@ApiTags('Club')
export class ClubController implements CrudController<Club> {
    constructor(public service: ClubService) {}
}
