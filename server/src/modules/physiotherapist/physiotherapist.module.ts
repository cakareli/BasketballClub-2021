import { Module } from '@nestjs/common';
import { PhysiotherapistService } from './physiotherapist.service';

@Module({
  providers: [PhysiotherapistService]
})
export class PhysiotherapistModule {}
