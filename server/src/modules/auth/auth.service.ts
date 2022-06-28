import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
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
    return {
      access_token: this.jwtService.sign(payload,
         { secret: jwtConstants.accessSecret,
           expiresIn: jwtConstants.accessExp }),
      refresh_token: this.jwtService.sign(payload,
         {secret: jwtConstants.refreshSecret,
           expiresIn: jwtConstants.refreshExp,}) 
    };
  }

  async refresh(userId: string, refreshToken: string){
    const user = await this.usersService.findOne(userId);
    if(user && refreshToken === user.refreshToken ){
      const payload = { username: user.email, sub: user.id, role: user.role };

      return {
        access_token: this.jwtService.sign(payload,
           { secret: jwtConstants.accessSecret,
            expiresIn: jwtConstants.accessExp }),
        refresh_token: this.jwtService.sign(payload,
           {secret: jwtConstants.refreshSecret,
            expiresIn: jwtConstants.refreshExp,
        }) 
      };
    }else{
      throw new ForbiddenException("Access denied");
    }
  }
}