import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Equipment } from './equipment';
import { EquipmentService } from './equipment.service';

@Crud({
    model: {
        type: Equipment
    }
})
@Controller('equipment')
@ApiTags('Equipment')
export class EquipmentController implements CrudController<Equipment> {
    constructor(public service: EquipmentService) {}
}
