import { Injectable } from '@nestjs/common';

export type User = {
    id: number;
    username: string;
    name: string;
    password: string;
};

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            id: 1,
            username: 'admin',
            name: 'Admin',
            password: 'admin',
        },
        {
            id: 2,
            username: 'user',
            name: 'User',
            password: 'user',
        }
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}
