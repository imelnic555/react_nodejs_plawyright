import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            console.log("requested");
            const response = await fetch("http://localhost:3000/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok && data.token) {
                console.log("✅ Login successful! Storing token:", data.token);
                localStorage.setItem("authToken", data.token); // ✅ Store token
                window.location.href = "/users"; // ✅ Redirect after login
            } else {
                setError(data.message || "Invalid credentials");
            }
        } catch (err) {
            setError("Something went wrong. Check backend logs.");
        }
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <div style={{ width: "300px", padding: "20px", border: "1px solid #ddd", borderRadius: "5px" }}>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
                    />
                    <button type="submit" style={{ width: "100%", padding: "10px", background: "blue", color: "white" }}>
                        Login
                    </button>
                </form>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
        </div>
    );
}
