// src/services/api.ts

export async function fetchUsers() {
    console.log("Fetching users api.ts");

    // This GETs from your NestJS endpoint.
    // If your Nest server is on a different URL or port, adjust accordingly.
    // e.g. fetch('http://localhost:3000/users') if needed.
    const response = await fetch('http://localhost:3000/users');

    if (!response.ok) {
        throw new Error(`Network response was not ok (status: ${response.status})`);
    }

    const data = await response.json();
    return data;
}
