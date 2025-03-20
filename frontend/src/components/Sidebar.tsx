// Sidebar.tsx
import React from 'react';
import "../css/Sidebar.css";

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar-container">
            <header className="sidebar-header">
                <h1>Welcome to the Home Page</h1>
            </header>
            <nav className="sidebar-nav">
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/users">Users</a></li>
                    <li><a href="/settings">Settings</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
