import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt } from "passport-jwt";
import { Strategy } from "passport-jwt";
import { jwtConstants } from "./constants";

@Injectable()
export class JwtAtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.accessSecret,
            
        });
    }

    async validate(payload: any) {
        return {
            id: payload.sub,
            email: payload.name,
            role: payload.role
        };
    }
}