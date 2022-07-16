import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCoachDto } from './dto/create-coach.dto';
import { UpdateCoachDto } from './dto/update-coach.dto';
import { Coach } from './entities/coach.entity';

@Injectable()
export class CoachService {
  @InjectRepository(Coach)
  private clubRepository: Repository<Coach>
  async create(createCoachDto: CreateCoachDto) {
    const newClub = await this.clubRepository.create(createCoachDto)
    return await this.clubRepository.save(newClub)
  }

  async findAll() {
    return await this.clubRepository.find()
  }

  async findOne(id: string) {
    return await this.clubRepository.findOne(id)
  }

  async update(id: string, updateCoachDto: UpdateCoachDto)  {
    const coach = await this.clubRepository.findOneOrFail(id)
    if(!coach.coachId){
      console.log("Club doesnt't exist")
    }
    await this.clubRepository.update(id, updateCoachDto)
    return await this.clubRepository.findOne(id)
  }

  async remove(id: string) {
    return await this.clubRepository.delete(id)
  }
}
