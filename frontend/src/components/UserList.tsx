import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../services/api.ts';
import '../css/Home.css';
import React from "react";
import Sidebar from "./Sidebar";

function UserList() {
    const { data: users, isLoading, error } = useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading users!</p>;

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            {/* Sidebar appears at the top */}
            <Sidebar />

            {/* Main content is rendered below the Sidebar */}
            <div
                style={{
                    padding: "20px",
                    marginTop: "20px", // Adjust this value if further separation is needed
                    maxHeight: "400px",
                    overflowY: "auto",
                }}
            >
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

export default UserList;
