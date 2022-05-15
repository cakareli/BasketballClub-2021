import { Module } from '@nestjs/common';
import { WorktimeService } from './worktime.service';

@Module({
  providers: [WorktimeService]
})
export class WorktimeModule {}
