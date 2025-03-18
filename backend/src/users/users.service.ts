import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    private readonly mockUsers: User[] = [
        { id: 1, name: 'John Doe', email: 'john@example.com', password:'1'},
        { id: 2, name: 'Jane Doe', email: 'jane@example.com',password:'1' },
    ];

    findAll(): Promise<User[]> {
        // Return a promise that resolves to the in-memory array
        return Promise.resolve(this.mockUsers);
    }


    async findOne(id: number): Promise<User> {
        const user = await this.usersRepository.findOne({ where: { id } });
        return user ?? new User();  // Return an empty User instead of null
    }
    create(user: Partial<User>) {
        return this.usersRepository.save(user);
    }
}
