import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/user.module';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { JwtAtStrategy } from './jwt.at.strategy';
import { JwtRtStrategy } from './jwt.rt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule,
  ],
  providers: [
    AuthService,
    LocalStrategy,
    JwtAtStrategy, 
    JwtRtStrategy],
  exports: [AuthService],
})
export class AuthModule { }
