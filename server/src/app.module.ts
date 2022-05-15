import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeormConfig } from './config/typeorm.config';
import { PlayerModule } from './modules/player/player.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig), PlayerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
