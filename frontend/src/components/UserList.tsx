// In your UserList.tsx or similar component
import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../services/api.ts';

function UserList() {
    const { data: users, isLoading, error } = useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading users!</p>;

    return (
        <ul>
            {users?.map((user: any) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}

export default UserList;
