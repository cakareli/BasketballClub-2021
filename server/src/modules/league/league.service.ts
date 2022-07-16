import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLeagueDto } from './dto/create-league.dto';
import { UpdateLeagueDto } from './dto/update-league.dto';
import { League } from './entities/league.entity';

@Injectable()
export class LeagueService {

  @InjectRepository(League)
  private leagueRepository: Repository<League>
  async create(createLeagueDto: CreateLeagueDto) {
    const newLeague = await this.leagueRepository.create(createLeagueDto)
    return await this.leagueRepository.save(newLeague)
  }

  async findAll() {
    return await this.leagueRepository.find()
  }

  async findOne(id: string) {
    return await this.leagueRepository.findOne(id)
  }

  async update(id: string, updateLeagueDto: UpdateLeagueDto) {
    const league = await this.leagueRepository.findOneOrFail(id)
    if(!league.id){
      console.log("League doesn't exist")
    }
    this.leagueRepository.update(id, updateLeagueDto)
    return this.leagueRepository.findOne(id)
  }

  async remove(id: string) {
    return await this.leagueRepository.delete(id)
  }
}
