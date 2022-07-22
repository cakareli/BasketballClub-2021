import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const newUser = this.usersRepository.create(createUserDto);
    return await this.usersRepository.save(newUser);
  }

  findAll() {
    return this.usersRepository.find()
  }

  findOne(id: string) {
    return this.usersRepository.findOne(id)
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User | null> {
    const user = await this.usersRepository.findOneOrFail(id);
    if (!user.id) {
      console.error("User doesn't exist");
    }
    this.usersRepository.update(id, updateUserDto);
    return this.usersRepository.findOne(id);
  }

  remove(id: string) {
    return this.usersRepository.delete(id)
  }

  findOneByUsername(username: string): Promise<User | undefined> {
    return this.usersRepository
        .createQueryBuilder('user')
        .where("user.email = :username", { username: username })
        .getOne();
  }
    
}



