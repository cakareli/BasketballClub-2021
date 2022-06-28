import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { User } from './user';

@Injectable()
export class UserService extends TypeOrmCrudService<User> {
    constructor(@InjectRepository(User) repo, private httpService: HttpService) {
        super(repo);
    }

    findOneByUsername(username: string): Promise<User | undefined> {
        return this.repo
            .createQueryBuilder('user')
            .where("user.email = :username", { username: username })
            .getOne();
    }
}
