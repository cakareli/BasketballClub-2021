import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Team } from './team';

@Injectable()
export class TeamService extends TypeOrmCrudService<Team> {
    constructor(@InjectRepository(Team) repo){
        super(repo);
    }
}
