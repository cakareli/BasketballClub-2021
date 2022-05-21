import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Therapy } from './therapy';
import { TherapyService } from './therapy.service';

@Crud({
    model: {
        type: Therapy
    }
})
@Controller('therapy')
@ApiTags('Therapy')
export class TherapyController implements CrudController<Therapy>  {
    constructor(public service: TherapyService) {}
}
