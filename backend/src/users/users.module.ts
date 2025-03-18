import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { User } from './users.entity';
import { AuthService } from '../auth/auth.service';
import { JwtStrategy } from '../auth/jwt.strategy';

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        PassportModule,
        JwtModule.register({
            secret: 'yourSecretKey', // Replace with a strong secret key
            signOptions: { expiresIn: '60s' },
        }),
    ],
    controllers: [UsersController],
    providers: [
        UsersService,
        UsersRepository,
        AuthService,
        JwtStrategy,
    ],
    exports: [UsersService, AuthService],
})
export class UsersModule {}
