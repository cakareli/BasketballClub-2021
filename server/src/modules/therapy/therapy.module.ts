import { Module } from '@nestjs/common';
import { TherapyService } from './therapy.service';

@Module({
  providers: [TherapyService]
})
export class TherapyModule {}
