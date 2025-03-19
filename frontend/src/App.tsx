// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login.tsx";
import UserList from "./components/UserList.tsx";
import Sidebar from "./components/Sidebar.tsx";
import Home from "./components/Home.tsx";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<h2>Home Page</h2>} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route
                    path="/users"
                    element={
                        <div style={{ display: "flex" }}>
                            <Sidebar />
                            <UserList />
                        </div>
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;
