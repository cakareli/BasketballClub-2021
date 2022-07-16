import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team } from './entities/team.entity';

@Injectable()
export class TeamService {
  @InjectRepository(Team)
  private teamRepository: Repository<Team>
  async create(createTeamDto: CreateTeamDto) {
    const newTeam = await this.teamRepository.create(createTeamDto)
    return await this.teamRepository.save(newTeam)
  }

  async findAll() {
    return await this.teamRepository.find()
  }

  async findOne(id: string) {
    return await this.teamRepository.findOne(id)
  }

  async update(id: string, updateTeamDto: UpdateTeamDto) {
    const team = await this.teamRepository.findOneOrFail(id)
    if(!team.id){
      console.log("Team doesn't exist")
    }
    await this.teamRepository.update(id, updateTeamDto)
    return await this.teamRepository.findOne(id)
  }

  async remove(id: string) {
    return await this.teamRepository.delete(id)
  }
}
