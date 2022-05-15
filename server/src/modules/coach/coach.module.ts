import { Module } from '@nestjs/common';
import { CoachService } from './coach.service';

@Module({
  providers: [CoachService]
})
export class CoachModule {}
