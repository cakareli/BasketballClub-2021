import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTherapyDto } from './dto/create-therapy.dto';
import { UpdateTherapyDto } from './dto/update-therapy.dto';
import { Therapy } from './entities/therapy.entity';

@Injectable()
export class TherapyService {
  @InjectRepository(Therapy)
  private therapyRepository: Repository<Therapy>
  async create(createTherapyDto: CreateTherapyDto) {
    const newTherapy = await this.therapyRepository.create(createTherapyDto)
    return await this.therapyRepository.save(newTherapy)
  }

  async findAll() {
    return await this.therapyRepository.find()
  }

  async findOne(id: string) {
    return await this.therapyRepository.findOne(id)
  }

  async update(id: string, updateTherapyDto: UpdateTherapyDto) {
    const therapy = await this.therapyRepository.findOneOrFail(id)
    if(!therapy.id){
      console.log("Therapy doesn't exist")
    }
    await this.therapyRepository.update(id, updateTherapyDto)
    return await this.therapyRepository.findOne(id)
  }

  remove(id: string) {
    return this.therapyRepository.delete(id)
  }
}
