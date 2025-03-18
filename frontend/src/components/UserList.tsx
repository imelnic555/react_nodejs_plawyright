// UserList.tsx - Fetch Users
import React from 'react';
import { useQuery } from '@tanstack/react-query';

interface User {
    id: number;
    name: string;
    email: string;
}

const fetchUsers = async (): Promise<User[]> => {
    const token = localStorage.getItem('authToken');
    const response = await fetch('https://api.exemplu.com/users', {
        headers: { Authorization: `Bearer ${token}` }
    });
    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }
    return response.json();
};

const UserList: React.FC = () => {
    // const { data: users, isLoading, error } = useQuery<User[]>(['users'], fetchUsers);

    // if (isLoading) return <p>Loading users...</p>;
    // if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            {/*<h2>User List</h2>*/}
            {/*<ul>*/}
            {/*    {users?.map((user) => (*/}
            {/*        <li key={user.id}>{user.name} - {user.email}</li>*/}
            {/*    ))}*/}
            {/*</ul>*/}
        </div>
    );
};

export default UserList;