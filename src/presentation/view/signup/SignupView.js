import './SignupView.css';
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import LoginRepositoryImpl from "../../../data/login/LoginRepositoryImpl"
import MainButton from "../../../components/MainButton"

function SignupView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const loginRepo = new LoginRepositoryImpl();
  const [isLoading, setIsLoading] = useState(false);

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
    console.log('Signup in with:', email);
    setIsLoading(true);
    try {
      const res = await loginRepo.signup(email, password);
      navigate('/')
    } catch(e) {
      console.log('logged in with ' + e)
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
        <MainButton type='submit' variant="contained" color="primary">
          Signup
        </MainButton>
      </form>
    </div>
  );
}

export default SignupView;