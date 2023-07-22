import "../styles/login.css"
import React, { useState } from 'react';

function Login() {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const handleEmailChange = (event) => {
    setInputEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setInputPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Do something with the form data, e.g., send it to the server
    console.log('Email:', inputEmail);
    console.log('Password:', inputPassword);
  };

  return (
    <div className="body html">
    <div className="container kontainer">
      <div className="card card-container">
        <p id="profile-name" className="profile-name-card">Please Login</p>
        <form className="form-signin" onSubmit={handleSubmit}>
          <span id="reauth-email" className="reauth-email"></span>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required
            autoFocus
            value={inputEmail}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required
            value={inputPassword}
            onChange={handlePasswordChange}
          />
          <div id="remember" className="checkbox">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit">
            Sign in
          </button>
        </form>
        {/* /form */}
        <a href="/" className="forgot-password">
          Forgot the password?
        </a>
      </div>
      {/* /card-container */}
    </div>
    </div>
  );
}

export default Login;
