import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from '../users/users.module';
import {AuthController} from "./auth.controller"; // Ensure UsersModule is imported if there are dependencies

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: 'yourSecretKey', // Use a secure method to manage this key
            signOptions: { expiresIn: '60h' },
        }),
        UsersModule, // Import UsersModule if AuthService depends on it
    ],
    controllers: [AuthController], // <-- d,
    providers: [AuthService, JwtStrategy],
    exports: [AuthService],
})
export class AuthModule {}
