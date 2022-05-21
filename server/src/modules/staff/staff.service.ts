import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Staff } from './staff';

@Injectable()
export class StaffService extends TypeOrmCrudService<Staff> {
    constructor(@InjectRepository(Staff) repo){
        super(repo);
    }
}
