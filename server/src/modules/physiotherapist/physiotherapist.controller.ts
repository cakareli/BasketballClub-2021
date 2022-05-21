import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Physiotherapist } from './physiotherapist';
import { PhysiotherapistService } from './physiotherapist.service';

@Crud({
    model: {
        type: Physiotherapist
    }
})
@Controller('physiotherapist')
@ApiTags('Physiotherapist')
export class PhysiotherapistController implements CrudController<Physiotherapist> {
    constructor(public service: PhysiotherapistService){}
}
