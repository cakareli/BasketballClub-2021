import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWorktimeDto } from './dto/create-worktime.dto';
import { UpdateWorktimeDto } from './dto/update-worktime.dto';
import { WorkTime } from './entities/worktime.entity';

@Injectable()
export class WorktimeService {
  @InjectRepository(WorkTime)
  private workTimeRepository: Repository<WorkTime>
  async create(createWorktimeDto: CreateWorktimeDto) {
    const newWorkTime = await this.workTimeRepository.create(createWorktimeDto)
    return this.workTimeRepository.save(newWorkTime)
  }

  async findAll() {
    return await this.workTimeRepository.find()
  }

  async findOne(id: string) {
    return await this.workTimeRepository.findOne(id)
  }

  async update(id: string, updateWorktimeDto: UpdateWorktimeDto) {
    const workTime = await this.workTimeRepository.findOneOrFail(id)
    if(!workTime.id){
      console.log("WorkTime doesn't exist")
    }
    await this.workTimeRepository.update(id, updateWorktimeDto)
    return await this.workTimeRepository.findOne(id)
  }

  async remove(id: string) {
    return await this.workTimeRepository.findOne(id)
  }
}
