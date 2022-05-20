import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Club } from './club';

@Injectable()
export class ClubService extends TypeOrmCrudService<Club> {
    constructor(@InjectRepository(Club) repo){
        super(repo);
    }
}
