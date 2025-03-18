import React from 'react';

const Sidebar: React.FC = () => {
    return (
        <div style={{ width: '250px', background: '#f4f4f4', padding: '20px', height: '100vh' }}>
            <h2>Sidebar</h2>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Users</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;