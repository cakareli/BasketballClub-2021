import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClubDto } from './dto/create-club.dto';
import { UpdateClubDto } from './dto/update-club.dto';
import { Club } from './entities/club.entity';

@Injectable()
export class ClubService {
  @InjectRepository(Club)
  private clubRepository: Repository<Club> 
  async create(createClubDto: CreateClubDto) {
    const newClub = this.clubRepository.create(createClubDto)
    return await this.clubRepository.save(newClub);
  }

  async findAll() {
    return await this.clubRepository.find()
  }

  async findOne(id: string) {
    return await this.clubRepository.findOne(id)
  }

  async update(id: string, updateClubDto: UpdateClubDto) {
    const club = await this.clubRepository.findOneOrFail(id)
    if(!club.id){
      console.error("Club doesn't exist")
    }
    await this.clubRepository.update(id, updateClubDto)
    return await this.clubRepository.findOne(id)
  }

  async remove(id: string) {
    return await this.clubRepository.delete(id);
  }
}
