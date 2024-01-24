// import React from 'react'

// function page() {
//   return (
//     <div>Login</div>
//   )
// }

// export default page

// pages/login.js
"use client"
// pages/login.js

import React, { useState } from 'react';

import styles from './styles/Login.module.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Simulate authentication logic (replace with actual authentication logic)
    const isAuthenticated = mockAuthentication(username, password);

    if (isAuthenticated) {
      console.log('Login successful');
      // Redirect the user after successful login
      // For example, you can use router.push('/dashboard') from 'next/router'
    } else {
      console.log('Login failed');
      // Handle login failure (display error message, redirect, etc.)
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      <form className={styles.form} onSubmit={handleLogin}>
        <label className={styles.label}>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.input}
          />
        </label>
        <br />
        <label className={styles.label}>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
        </label>
        <br />
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

// Simulated authentication logic (replace with actual authentication logic)
const mockAuthentication = (username, password) => {
  // In a real scenario, you would validate the credentials against your authentication system
  // For this example, we'll assume a simple check (e.g., hardcoded credentials)
  return username === 'user' && password === 'password';
};

export default Login;
