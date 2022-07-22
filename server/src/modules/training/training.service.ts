import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTrainingDto } from './dto/create-training.dto';
import { UpdateTrainingDto } from './dto/update-training.dto';
import { Training } from './entities/training.entity';

@Injectable()
export class TrainingService {
  @InjectRepository(Training)
  private trainingRepository: Repository<Training>
  async create(createTrainingDto: CreateTrainingDto) {
    const newTraining = await this.trainingRepository.create(createTrainingDto)
    return await this.trainingRepository.save(newTraining) 
  }

  async findAll() {
    return await this.trainingRepository.find()
  }

  async findOne(id: string) {
    return await this.trainingRepository.findOne(id)
  }

  async update(id: string, updateTrainingDto: UpdateTrainingDto) {
    const training = await this.trainingRepository.findOneOrFail(id)
    if(!training.id){
      console.log("Training doesn't exist")
    }
    await this.trainingRepository.update(id, updateTrainingDto)
    return this.trainingRepository.findOne(id)
  }

  async remove(id: string) {
    return await this.trainingRepository.delete(id)
  }
}
