import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super(); // pass configuaration here for other passport strategy
    }

    async validate(username: string, password: string): Promise<any> {
        // authService will hadle the user validation
        const user = await this.authService.validateUser(username, password);

        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }
        return user;
    }
}