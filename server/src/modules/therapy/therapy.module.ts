import { Module } from '@nestjs/common';
import { TherapyService } from './therapy.service';
import { TherapyController } from './therapy.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Therapy } from './entities/therapy.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Therapy])],
  providers: [TherapyService],
  controllers: [TherapyController]
})
export class TherapyModule {}
