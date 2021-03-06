import { Module } from '@nestjs/common';
import { PhysiotherapistService } from './physiotherapist.service';
import { PhysiotherapistController } from './physiotherapist.controller';
import { Physiotherapist } from './entities/physiotherapist.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Physiotherapist])],
  providers: [PhysiotherapistService],
  controllers: [PhysiotherapistController]
})
export class PhysiotherapistModule {}
