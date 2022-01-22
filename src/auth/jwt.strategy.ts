import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { jwtConstants } from "./constants";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            secretOrKey: jwtConstants.secret,
            ignoreExpiration: false,
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        });
    }

    // the actual validation happen in the constructor. We're basically just returning the validated payload
    async validate(payload: any) {
        // this will be saved in @Request() req.user
        return {
            id: payload.sub,
            name: payload.name,
        }
    }
}