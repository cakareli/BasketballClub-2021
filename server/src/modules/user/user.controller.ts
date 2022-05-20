import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController,   } from '@nestjsx/crud';
import { User } from './user';
import { UserService } from './user.service';

@Crud({
    model:{
        type: User
    } 
})
@Controller('user')
@ApiTags('User')
export class UserController implements CrudController<User> {
    constructor(public service: UserService) {}
    
   

}
