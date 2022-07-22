import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { jwtConstants } from "./constants";
import { Request } from "express";

@Injectable()
export class JwtRtStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken,
            ignoreExpiration: false,
            secretOrKey: jwtConstants.refreshSecret,
            PassReqToCallback: true,
        })
    }

    async validate(req: Request, payload: any) {
        const refreshToken = req.get('authorization').replace('Bearer', '').trim();
        return {
            ...payload,
            refreshToken,
        }
    }
}