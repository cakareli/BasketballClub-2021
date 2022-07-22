import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UpdateUserDto } from '../user/dto/update-user.dto';
import { UserService } from '../user/user.service';
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) { }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByUsername(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.email, sub: user.id, role: user.role };
    const access_token = this.jwtService.sign(payload,
      { secret: jwtConstants.accessSecret,
        expiresIn: jwtConstants.accessExp });
    const refresh_token = this.jwtService.sign(payload,
      {secret: jwtConstants.refreshSecret,
        expiresIn: jwtConstants.refreshExp,}) 
    this.usersService.update(user.id, {refreshToken: refresh_token})
    return {
      access_token: access_token,
      refresh_token: refresh_token 
    };
  }

  async refresh(userId: string, refreshToken: string){
    const user = await this.usersService.findOne(userId);
    if(user && refreshToken === user.refreshToken ){
      const payload = { username: user.email, sub: user.id, role: user.role };
      const access_token = this.jwtService.sign(payload,
        { secret: jwtConstants.accessSecret,
          expiresIn: jwtConstants.accessExp });
      const refresh_token = this.jwtService.sign(payload,
        {secret: jwtConstants.refreshSecret,
          expiresIn: jwtConstants.refreshExp,}) 
      this.usersService.update(user.id, {refreshToken: refresh_token})
      return {
        access_token: access_token,
        refresh_token: refresh_token 
      };
    }else{
      throw new ForbiddenException("Access denied");
    }
  }
}