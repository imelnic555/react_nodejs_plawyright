import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../services/api.ts';
import React from "react";
import Sidebar from './Sidebar.tsx';
import '../css/Home.css';


function Settings() {
    const { data: users, isLoading, error } = useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading users!</p>;

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Sidebar />
            <div
                style={{
                    marginTop: '20px',
                    padding: '20px',
                    backgroundColor: 'rgba(255, 0, 0, 0.1)', // Temporary debug styling
                    border: '1px solid red',
                }}
            >

                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search items..."
                        // value={searchQuery}
                        // onChange={(e) => setSearchQuery(e.target.value)}
                        style={{ width: '100%', padding: '8px' }}
                    />
                </div>


                <ul>
                    {users?.map((user: any) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                    {users && users.length === 0 && (
                        <li>No users found.</li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Settings;
