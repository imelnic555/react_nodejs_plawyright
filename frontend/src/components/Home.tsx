import React, { useState } from 'react';
import '../../css/Home.css';

interface Item {
    id: number;
    name: string;
}

const Home: React.FC = () => {
    // Sample list of items (could be fetched from an API)
    const items: Item[] = [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Cherry' },
        { id: 4, name: 'Date' },
        { id: 5, name: 'Elderberry' },
        { id: 6, name: 'Fig' },
        { id: 7, name: 'Grape' },
    ];

    // State to store the current search query
    const [searchQuery, setSearchQuery] = useState('');

    // Filter items based on the search query (case-insensitive)
    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to the Home Page</h1>
            </header>
            <nav className="home-nav">
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/users">Users</a></li>
                    <li><a href="/settings">Settings</a></li>
                </ul>
            </nav>
            <main className="home-content">
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search items..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <ul className="item-list">
                    {filteredItems.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                    {filteredItems.length === 0 && (
                        <li>No items found matching your search.</li>
                    )}
                </ul>
            </main>
            <footer className="home-footer">
                <p>&copy; {new Date().getFullYear()} My Website</p>
            </footer>
        </div>
    );
};

export default Home;
