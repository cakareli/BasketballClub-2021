import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { typeormConfig } from './config/typeorm.config';
import { AuthModule } from './modules/auth/auth.module';
import { ClubModule } from './modules/club/club.module';
import { CoachModule } from './modules/coach/coach.module';
import { EquipmentModule } from './modules/equipment/equipment.module';
import { LeagueModule } from './modules/league/league.module';
import { PhysiotherapistModule } from './modules/physiotherapist/physiotherapist.module';
import { PlayerModule } from './modules/player/player.module';
import { StaffModule } from './modules/staff/staff.module';
import { TeamModule } from './modules/team/team.module';
import { TherapyModule } from './modules/therapy/therapy.module';
import { TrainingModule } from './modules/training/training.module';
import { UserModule } from './modules/user/user.module';
import { WorktimeModule } from './modules/worktime/worktime.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig),
    PlayerModule,
    UserModule,
    ClubModule, 
    LeagueModule,
    CoachModule,
    EquipmentModule,
    PhysiotherapistModule,
    StaffModule,
    TeamModule,
    TherapyModule,
    TrainingModule,
    WorktimeModule,
    AuthModule,
  ],
  controllers: [AppController],
  })
export class AppModule {}
