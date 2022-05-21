import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Player } from './player';
import { PlayerService } from './player.service';

@Crud({
    model: {
        type: Player
    }
})
@Controller('player')
@ApiTags('Player')
export class PlayerController implements CrudController<Player> {
    constructor(public service: PlayerService){}
}
