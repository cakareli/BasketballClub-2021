import { Module } from '@nestjs/common';
import { TrainingService } from './training.service';
import { TrainingController } from './training.controller';
import { Training } from './entities/training.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Training])],
  providers: [TrainingService],
  controllers: [TrainingController]
})
export class TrainingModule {}
