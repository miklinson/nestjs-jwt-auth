import { Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth/auth.service";
import { LocalAuthGuard } from "./auth/local-auth.guard";

@Controller()
export class AppController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    // user will be in the request object after the authentication in LocalAuthGuard -> LocalStrategy
    login(@Request() req): any {
        return this.authService.login(req.user);
    }

    @Get()
    getHello(@Request() req): string {
        return req.user;
    }
}