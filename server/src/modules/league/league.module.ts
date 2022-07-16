import { Module } from '@nestjs/common';
import { LeagueService } from './league.service';
import { LeagueController } from './league.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { League } from './entities/league.entity';

@Module({
  imports: [TypeOrmModule.forFeature([League])],
  providers: [LeagueService],
  controllers: [LeagueController]
})
export class LeagueModule {}
