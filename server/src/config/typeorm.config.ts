import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Club } from "src/modules/club/entities/club.entity";
import { Coach } from "src/modules/coach/entities/coach.entity";
import { Equipment } from "src/modules/equipment/entities/equipment.entity";
import { League } from "src/modules/league/entities/league.entity";
import { Physiotherapist } from "src/modules/physiotherapist/entities/physiotherapist.entity";
import { Player } from "src/modules/player/entities/player.entity";
import { Staff } from "src/modules/staff/entities/staff.entity";
import { Team } from "src/modules/team/entities/team.entity";
import { Therapy } from "src/modules/therapy/entities/therapy.entity";
import { Training } from "src/modules/training/entities/training.entity";
import { User } from "src/modules/user/entities/user.entity";
import { WorkTime } from "src/modules/worktime/entities/worktime.entity";

export const typeormConfig: TypeOrmModuleOptions = {
    type: "postgres",
    host: "localhost",
    port: 54320,
    username: "admin_db",
    password: "admin_db",
    database: "db",
    synchronize: true,
    logging: false,
    entities: [Club, 
        Coach, 
        Physiotherapist, 
        Player, 
        Staff, 
        Team, 
        WorkTime, 
        League, 
        Equipment, 
        Training, 
        Therapy, 
        User
    ],
    migrations: [],
    subscribers: [],
}