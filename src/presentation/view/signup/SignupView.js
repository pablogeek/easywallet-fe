import './SignupView.css';
import React, { useState, useEffect } from "react";

function SignupView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle email and password input changes
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    console.log('Logging in with:', email, password);
    await fetch('https://localhost', { method: 'POST', headers: { accept: 'application/json', body: JSON.stringify({ message: 'Hello World!' }) } })
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required
          onChange={handleEmailChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required 
          onChange={handlePasswordChange}/>
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default SignupView;