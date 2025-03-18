import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth') // ✅ This makes the base URL /auth
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login') // ✅ This makes the endpoint /auth/login
    @HttpCode(HttpStatus.OK)
    async login(@Body() loginDto: LoginDto) {
        console.log("🔥 Login request received:", loginDto);
        return this.authService.login(loginDto);
    }
}
