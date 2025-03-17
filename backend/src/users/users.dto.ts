import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    name!: string;  // Use `!` to tell TypeScript that this will be initialized

    @IsEmail()
    email!: string;

    @MinLength(6)
    password!: string;
}

export class UpdateUserDto {
    name?: string;
    email?: string;
    password?: string;
}
