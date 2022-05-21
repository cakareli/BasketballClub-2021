import { Module } from '@nestjs/common';
import { CoachService } from './coach.service';
import { CoachController } from './coach.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coach } from './coach';

@Module({
  imports: [TypeOrmModule.forFeature([Coach])],
  providers: [CoachService],
  controllers: [CoachController]
})
export class CoachModule {}
