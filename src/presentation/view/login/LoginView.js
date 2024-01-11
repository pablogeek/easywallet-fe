import './LoginView.css';
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import LoginRepositoryImpl from "../../../data/login/LoginRepositoryImpl"

function LoginView () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const loginRepo = new LoginRepositoryImpl();

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
    try {
      setIsLoading(true);
      const res = await loginRepo.login(email, password);
      localStorage.setItem('-easywallet-authToken', res.key);
      navigate('/main/' + res.address)
    } catch(e) {
      console.log('logged in with ' + e)
    }
    setIsLoading(false);
  };

  const goToSignup = () =>{ 
    navigate('/signup')
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
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
        <button type="submit">Login</button>
        <button onClick={goToSignup}>Signup</button>
      </form>
    </div>
  );
}

export default LoginView;