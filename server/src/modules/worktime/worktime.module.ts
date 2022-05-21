import { Module } from '@nestjs/common';
import { WorktimeService } from './worktime.service';
import { WorktimeController } from './worktime.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkTime } from './worktime';

@Module({
  imports: [TypeOrmModule.forFeature([WorkTime])],
  providers: [WorktimeService],
  controllers: [WorktimeController]
})
export class WorktimeModule {}
