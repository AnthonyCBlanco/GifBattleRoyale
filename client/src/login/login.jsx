import React from "react";
import './login.css';

function LoginPage() {
    return (
    <div className="login-page">
      <h1>Login Page</h1>

<section className="login-form">
  <h2>Login Form</h2>
  <form>
    <label>
      Email:
      <input type="email" name="email" />
    </label>
    <label>
      Password:
      <input type="password" name="password" />
    </label>
    <button type="submit">Login</button>
  </form>
</section>

<section className="signup-form">
    <h2>Signup Form</h2>
  <form>
    <label>
      Name:
      <input type="text" name="name" />
    </label>
    <label>
      Email:
      <input type="email" name="email" />
    </label>
    <label>
      Password:
      <input type="password" name="password" />
    </label>
    <button type="submit">Signup</button>
  </form>
</section>
    
    <button className="logout-button">Logout</button>
    <button className="home-button">Home</button>
    </div>

    );

}
export default LoginPage;