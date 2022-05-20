import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Training } from './training';
import { TrainingService } from './training.service';

@Crud({
    model: {
        type: Training
    }
})
@Controller('training')
@ApiTags('Training')
export class TrainingController implements CrudController<Training> {
    constructor(public service: TrainingService) {}
}
