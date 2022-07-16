import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './modules/auth/auth.service';
import { JwtRefreshAuthGuard } from './modules/auth/jwt.rt.guard';
import { LocalAuthGuard } from './modules/auth/local.guard';

@Controller()
export class AppController {
  constructor(
    private authService: AuthService,
  ) { }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);

  }

  // @UseGuards(JwtRefreshAuthGuard)
  @Post('auth/refresh')
  async refresh(@Request() req){
    const user = req.body;
    return this.authService.refresh(user['userId'], user['refreshToken']);
  }
}