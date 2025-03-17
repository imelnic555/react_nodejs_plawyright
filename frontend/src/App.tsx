import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login.js";
import UserList from "./components/UserList.js";  // Ensure correct case

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/users" element={<UserList />} />
            </Routes>
        </Router>
    );
}
