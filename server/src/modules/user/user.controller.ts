import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController, } from '@nestjsx/crud';
import { JwtAuthGuard } from '../auth/jwt.at.guard';
import { User } from './user';
import { UserService } from './user.service';

@Crud({
    model: {
        type: User
    }
})
@Controller('user')
@ApiTags('User')
export class UserController implements CrudController<User> {
    constructor(public service: UserService) { }

    @Get(':username')
    findOneByUsername(@Param('username') username: string): Promise<User> {
        return this.service.findOneByUsername(username);
    }

    @UseGuards(JwtAuthGuard)
    @Get('protected/:id')
    findFirst(@Param('id') id: number): Promise<User> {
        return this.service.findOne({ id: id });
    }
}
