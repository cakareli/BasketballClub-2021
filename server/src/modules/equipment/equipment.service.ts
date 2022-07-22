import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { timeStamp } from 'console';
import { Repository } from 'typeorm';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { Equipment } from './entities/equipment.entity';

@Injectable()
export class EquipmentService {

  @InjectRepository(Equipment)
  private equipmentRepository: Repository<Equipment>

  async create(createEquipmentDto: CreateEquipmentDto) {
    const newEquipment = await this.equipmentRepository.create(createEquipmentDto)
    return await this.equipmentRepository.save(newEquipment)
  }

  async findAll() {
    return await this.equipmentRepository.find()
  }

  async findOne(id: string) {
    return await this.equipmentRepository.findOne(id)
  }

  async update(id: string, updateEquipmentDto: UpdateEquipmentDto) {
    const equipment = await this.equipmentRepository.findOneOrFail(id)
    if(!equipment.id){
      console.log("Equipment doesn't exist")
    }
    await this.equipmentRepository.update(id, updateEquipmentDto)
    return await this.equipmentRepository.findOne(id)
  }

  async remove(id: string) {
    return await this.equipmentRepository.delete(id)
  }
}
