import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Training } from './training';

@Injectable()
export class TrainingService extends TypeOrmCrudService<Training> {
    constructor(@InjectRepository(Training) repo) {
        super(repo);
    }
}
