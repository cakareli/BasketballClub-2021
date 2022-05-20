import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Therapy } from './therapy';

@Injectable()
export class TherapyService extends TypeOrmCrudService<Therapy> {
    constructor(@InjectRepository(Therapy) repo){
        super(repo);
    }
}
