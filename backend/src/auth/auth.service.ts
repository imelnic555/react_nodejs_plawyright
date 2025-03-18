import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {}

    async login(loginDto: LoginDto): Promise<{ token: string }> {
        const { email, password } = loginDto;

        console.log("🛠 Login Attempt:", email, password);

        // ✅ Replace this with real database validation
        if (email === '1@1.com' && password === '1') {
            const payload = { email };
            const token = this.jwtService.sign(payload); // ✅ Generate JWT token
            console.log("🔑 Generated Token:", token);
            return { token }; // ✅ Send valid token to frontend
        }

        throw new UnauthorizedException('Invalid credentials');
    }
}
