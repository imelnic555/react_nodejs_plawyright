import React, { useState } from 'react';
import Sidebar from './Sidebar.tsx';

interface Item {
    id: number;
    name: string;
}

const Home: React.FC = () => {
    const items: Item[] = [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Cherry' },
        { id: 4, name: 'Date' },
        { id: 5, name: 'Elderberry' },
        { id: 6, name: 'Fig' },
        { id: 7, name: 'Grape' },
    ];

    const [searchQuery, setSearchQuery] = useState('');

    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

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
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{ width: '100%', padding: '8px' }}
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
            </div>
        </div>
    );
};

export default Home;
