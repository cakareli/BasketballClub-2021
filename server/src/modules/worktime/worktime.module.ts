import { Module } from '@nestjs/common';
import { WorktimeService } from './worktime.service';
import { WorktimeController } from './worktime.controller';
import { WorkTime } from './entities/worktime.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([WorkTime])],
  providers: [WorktimeService],
  controllers: [WorktimeController]
})
export class WorktimeModule {}
