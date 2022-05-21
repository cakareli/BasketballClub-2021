import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { WorkTime } from './worktime';

@Injectable()
export class WorktimeService extends TypeOrmCrudService<WorkTime> {
    constructor(@InjectRepository(WorkTime) repo){
        super(repo);
    }
}
