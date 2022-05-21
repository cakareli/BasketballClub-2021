import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { League } from './league';

@Injectable()
export class LeagueService extends TypeOrmCrudService<League> {
    constructor(@InjectRepository(League) repo){
        super(repo);
    }
}
