import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Staff } from './staff';
import { StaffService } from './staff.service';

@Crud({
    model: {
        type: Staff
    }
})
@Controller('staff')
@ApiTags('Staff')
export class StaffController implements CrudController<Staff> {
    constructor(public service: StaffService) {}
}
