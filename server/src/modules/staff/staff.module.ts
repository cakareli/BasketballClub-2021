import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Staff } from './staff';
import { StaffController } from './staff.controller';
import { StaffService } from './staff.service';

@Module({

  imports: [TypeOrmModule.forFeature([Staff])],
  providers: [StaffService],
  controllers: [StaffController]
})
export class StaffModule {}
