import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Coach } from './coach';

@Injectable()
export class CoachService extends TypeOrmCrudService<Coach> {
    constructor(@InjectRepository(Coach) repo) {
        super(repo);
    }
}
