import { Module } from '@nestjs/common';
import { PhysiotherapistService } from './physiotherapist.service';
import { PhysiotherapistController } from './physiotherapist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Physiotherapist } from './physiotherapist';

@Module({
  imports: [TypeOrmModule.forFeature([Physiotherapist])],
  providers: [PhysiotherapistService],
  controllers: [PhysiotherapistController]
})
export class PhysiotherapistModule {}
