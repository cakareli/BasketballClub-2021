import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Club } from "src/modules/club/club";
import { Coach } from "src/modules/coach/coach";
import { Equipment } from "src/modules/equipment/equipment";
import { League } from "src/modules/league/league";
import { Physiotherapist } from "src/modules/physiotherapist/physiotherapist";
import { Player } from "src/modules/player/player";
import { Staff } from "src/modules/staff/staff";
import { Team } from "src/modules/team/team";
import { Therapy } from "src/modules/therapy/therapy";
import { Training } from "src/modules/training/training";
import { User } from "src/modules/user/user";
import { WorkTime } from "src/modules/worktime/worktime";

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
        User],
    migrations: [],
    subscribers: [],
}