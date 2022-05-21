import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Physiotherapist } from './physiotherapist';

@Injectable()
export class PhysiotherapistService extends TypeOrmCrudService<Physiotherapist> {
    constructor(@InjectRepository(Physiotherapist) repo){
        super(repo);
    }
}
