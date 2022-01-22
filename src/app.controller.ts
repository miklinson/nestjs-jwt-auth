import { Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { AppService } from "./app.service";
import { LocalAuthGuard } from "./auth/local-auth.guard";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    // user will be in the request object after the authentication in LocalAuthGuard -> LocalStrategy
    login(@Request() req): any {
        return req.user;
    }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }
}