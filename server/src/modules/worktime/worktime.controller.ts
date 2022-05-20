import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { WorkTime } from './worktime';
import { WorktimeService } from './worktime.service';

@Crud({
    model: {
        type: WorkTime
    }
})
@Controller('worktime')
@ApiTags('WorkTime')
export class WorktimeController implements CrudController<WorkTime> {
    constructor(public service: WorktimeService) {}
}
