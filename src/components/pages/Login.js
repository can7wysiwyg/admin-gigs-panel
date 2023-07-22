import "../styles/login.css"
import React, { useState } from 'react';
import axios from "axios";

function Login() {
    const [values, setValues] = useState({email: "", password: ""})
    const handleChange = (event) => {
        const { name, value } = event.target;
    setValues({ ...values, [name]: value })

    }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const res = await axios.post("/admin/login", { ...values });
    localStorage.setItem("token", res.data.accesstoken);
    if (res.data.msg) {
     alert(res.data.msg)
     alert("")
     window.location.href = "/login"
    } else {
      window.location.href = "/";
    }

     

  }


 
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
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          
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
