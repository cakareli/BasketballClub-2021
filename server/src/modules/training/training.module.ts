import { Module } from '@nestjs/common';
import { TrainingService } from './training.service';
import { TrainingController } from './training.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Training } from './training';

@Module({
  imports: [TypeOrmModule.forFeature([Training])],
  providers: [TrainingService],
  controllers: [TrainingController]
})
export class TrainingModule {}
