import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    async login(loginDto: LoginDto): Promise<{ token?: string }> {
        const { email, password } = loginDto;

        // ✅ Check if the function is executed
        console.log("🔍 Login Attempt Received", loginDto);

        // ✅ Check if email & password are correctly received
        console.log("📩 Email:", email, "🛠 Password:", password);

        // Fake user check (Replace with database lookup)
        if (email === '1@1.com' && password === '1') {
            console.log("✅ Login successful for:", email);
            return { token: 'dummy-jwt-token' };
        }

        console.log("❌ Invalid login attempt for:", email);
        throw new UnauthorizedException('Invwwalid credentials2');
    }
}
