import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { timeStamp } from 'console';
import { Repository } from 'typeorm';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { Staff } from './entities/staff.entity';

@Injectable()
export class StaffService {
  @InjectRepository(Staff)
  private staffRepository: Repository<Staff>
  async create(createStaffDto: CreateStaffDto) {
    const newStaff = await this.staffRepository.create(createStaffDto)
    return await this.staffRepository.save(newStaff)
  }

  async findAll() {
    return await this.staffRepository.find()
  }

  async findOne(id: string) {
    return await this.staffRepository.findOne(id)
  }

  async update(id: string, updateStaffDto: UpdateStaffDto) {
    const staff = await this.staffRepository.findOneOrFail(id)
    if(!staff.staffId){
      console.log("Staff doesn't exist")
    }
    await this.staffRepository.update(id, updateStaffDto)
    return await this.staffRepository.findOne(id)
  }

  async remove(id: string) {
    return this.staffRepository.delete(id)
  }
}
