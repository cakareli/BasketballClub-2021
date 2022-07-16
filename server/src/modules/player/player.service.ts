import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Player } from './entities/player.entity';

@Injectable()
export class PlayerService {
  @InjectRepository(Player)
  private playerRepsitory: Repository<Player>
  async create(createPlayerDto: CreatePlayerDto) {
    const newPlayer = await this.playerRepsitory.create(createPlayerDto)
    return await this.playerRepsitory.save(newPlayer)
  }

  async findAll() {
    return await this.playerRepsitory.find()
  }

  async findOne(id: string) {
    return await this.playerRepsitory.findOne(id)
  }

  async update(id: string, updatePlayerDto: UpdatePlayerDto) {
    const player = await this.playerRepsitory.findOneOrFail(id)
    if(!player.playerId){
      console.log("Player doesn't exist")
    }
    await this.playerRepsitory.update(id, updatePlayerDto)
    return await this.playerRepsitory.findOne(id)
  }

  async remove(id: string) {
    return await this.playerRepsitory.delete(id)
  }
}
