import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePhysiotherapistDto } from './dto/create-physiotherapist.dto';
import { UpdatePhysiotherapistDto } from './dto/update-physiotherapist.dto';
import { Physiotherapist } from './entities/physiotherapist.entity';

@Injectable()
export class PhysiotherapistService {

  @InjectRepository(Physiotherapist)
  private physioTherapistRepository: Repository<Physiotherapist>
  async create(createPhysiotherapistDto: CreatePhysiotherapistDto) {
    const newPhysioTherapist = await this.physioTherapistRepository.create(createPhysiotherapistDto)
    return await this.physioTherapistRepository.save(newPhysioTherapist)
  }

  async findAll() {
    return await this.physioTherapistRepository.find()
  }

  async findOne(id: string) {
    return await this.physioTherapistRepository.findOne(id)
  }

  async update(id: string, updatePhysiotherapistDto: UpdatePhysiotherapistDto) {
    const physioTherapist = await this.physioTherapistRepository.findOneOrFail(id)
    if(!physioTherapist.physiotherapistId){
      console.log("PhysioTherapist doesn't exist")
    }
    await this.physioTherapistRepository.update(id, updatePhysiotherapistDto)
    return await this.physioTherapistRepository.findOne(id)
  }

  async remove(id: string) {
    return await this.physioTherapistRepository.delete(id)
  }
}
