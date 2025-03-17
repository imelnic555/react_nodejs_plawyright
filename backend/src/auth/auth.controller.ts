// backend/src/auth/auth.controller.ts
import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
// @ts-ignore
import { LoginDto } from './dto/login.dto';


@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    @HttpCode(HttpStatus.OK)
    async login(@Body() loginDto: LoginDto) {
        // Call your authentication logic (for example, validate user credentials)
        // Here, we assume authService.login returns a token or error.
        return this.authService.login(loginDto);
    }
}
