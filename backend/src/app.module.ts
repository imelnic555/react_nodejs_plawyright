import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
// @ts-ignore
import { User } from './users/users.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: ':memory:',
            entities: [User],
            synchronize: true, // For development/testing only; disable in production
        }),
        AuthModule,
        UsersModule,
    ],
})
export class AppModule {}
