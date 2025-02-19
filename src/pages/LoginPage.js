// src/pages/LoginPage.js
import React from 'react';
import './LoginPage.css'; // Import the CSS file for styling

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Register</h1>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="login-button">
            Register
          </button>
          <div>
            <p>Don't have an account? <a href="/guest">Continue as guest</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;