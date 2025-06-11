import React, { useState } from 'react';

const predefinedUsers = [
    { username: 'admin', password: 'admin123' },
    { username: 'user', password: 'user123' }
];

const Program8 = ({ onLogin }) => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleLogin = (e) => {
        e.preventDefault();

        const user = predefinedUsers.find(u => u.username === credentials.username && u.password === credentials.password);

        if (user) {
            sessionStorage.setItem('user', JSON.stringify(user));
            setError('');
            onLogin(user);
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <form onSubmit={handleLogin} className="p-4 max-w-md mx-auto shadow rounded bg-white mt-4">
            <h2 className="text-xl font-bold mb-4">Login</h2>
            {error && <p className="text-red-500">{error}</p>}
            <input name="username" value={credentials.username} onChange={handleChange} required
                placeholder="Username" className="w-full p-2 mb-2 border rounded" />
                <br/>
            <br />

            <input name="password" type="password" value={credentials.password} onChange={handleChange} required
                placeholder="Password" className="w-full p-2 mb-2 border rounded" />
                <br/>
            <br />

            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Login</button>
        </form>
    );
};

export default Program8;