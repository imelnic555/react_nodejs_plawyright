// backend/src/auth/auth.module.ts
import { Module } from '@nestjs/common';

// @ts-ignore
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
// Import any required modules (e.g., UsersModule, JwtModule, etc.)

@Module({
    controllers: [AuthController],
    providers: [AuthService],
    // imports: [...],
})
export class AuthModule {}
