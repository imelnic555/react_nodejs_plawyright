import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';
import { User } from './users.entity'; // or wherever your User interface/entity is defined

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    // 1) GET /users -- Public (no guard)
    @Get()
    async getPublicUsers(): Promise<User[]> {
        console.log('Fetching public users...');
        return this.usersService.findAll();
    }

    // // 2) GET /users/private -- Protected by JWT
    // @Get('private')
    // @UseGuards(AuthGuard('jwt'))
    // async getPrivateUsers(): Promise<User[]> {
    //     console.log('Fetching private users, requires auth...');
    //     return this.usersService.findAllPrivate();
    // }

    // 3) GET /users/:id -- Fetch one user (decide if guarded or not)
    @Get(':id')
    async findOne(@Param('id') id: number): Promise<User> {
        return this.usersService.findOne(id);
    }

    // 4) POST /users -- Create a user (decide if guarded or not)
    @Post()
    async create(@Body() user: Partial<User>): Promise<User> {
        return this.usersService.create(user);
    }
}
