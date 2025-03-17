// backend/src/auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
// @ts-ignore
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    async login(loginDto: LoginDto): Promise<any> {
        const { email, password } = loginDto;
        // For demonstration, accept only specific credentials:
        if (email === 'test@example.com' && password === 'password123') {
            return { token: 'dummy-jwt-token' };
        }
        throw new UnauthorizedException('Invalid credentials');
    }
}
