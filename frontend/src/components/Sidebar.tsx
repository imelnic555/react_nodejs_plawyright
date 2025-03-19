import React from 'react';

const Sidebar: React.FC = () => {
    return (
        <div style={{ width: '250px', background: '#f4f4f4', padding: '20px', height: '100vh' }}>
            <h2>Sidebar</h2>
            <ul>
                <li><a href="home">Home</a></li>
                <li><a href="userList">users</a></li>
                <li><a href="settings">Settings</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;