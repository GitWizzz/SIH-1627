import React, { useState } from 'react';
import './css/style1.css';
import { loginUser, registerUser } from '../api';

const Login = () => {
    const [activeTab, setActiveTab] = useState('login');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState('');
    const [token, setToken] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser({ username, password });
            setToken(response.data.token);
            console.log(token);
            setError('Login Successful')
        } catch (err) {
            console.error('Login failed:', err);
            setError('Invalid username or password');
        }
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await registerUser({ username, password, role });
            setError('Registration Successful')
        } catch (err) {
            console.error('Signup failed:', err);
            setError('Error registering user');
        }
    };

    return (
        
        <div>
            <div>
                <a href="/"><button className='login-home' type='button'>HOME</button></a>
            </div>
        <div className='m-2'>
            <div className="authh-container">
                <div className="auth-tabs">
                    <button
                        className={`tab-btn ${activeTab === 'login' ? 'active' : ''}`}
                        onClick={() => setActiveTab('login')}
                    >
                        Log in
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'signup' ? 'active' : ''}`}
                        onClick={() => setActiveTab('signup')}
                    >
                        Sign up
                    </button>
                </div>

                {activeTab === 'login' && (
                    <div className="auth-form">
                        {error && <div className="error">{error}</div>}
                        <form onSubmit={handleLogin}>
                            <input className='input-di' type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}
                            />
                            <input className='input-di' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
                            />
                            <div className="checkbox-group d-flex justify-content-center">
                                <div className=''>
                                    <input className='input-di' type="checkbox" id="rememberMe" />
                                </div>
                                <div className='m-1'>
                                    <label htmlFor="rememberMe">Remember me</label>
                                </div>
                            </div>
                            <button className="submit-btn" type="submit">Log in</button>
                        </form>
                    </div>
                )}

                {activeTab === 'signup' && (
                    <div className="auth-form">
                        {error && <div className="error">{error}</div>}
                        <form onSubmit={handleSignup}>
                            <input className='input-di' type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}
                            />
                            <input className='input-di' type="password" placeholder="Password (6 characters minimum)" value={password} onChange={(e) => setPassword(e.target.value)}
                            />
                            <div className='d-flex align-items-start m-1'>
                                <label className='my-3 mx-1' htmlFor="options">Role:- </label>
                                <select className='input-di' id="options" value={role} onChange={(e) => setRole(e.target.value)}
                                >
                                    <option value="">Select</option>
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>
                            <button className="submit-btn" type="submit">Sign up</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
        </div>
    );
};

export default Login;
