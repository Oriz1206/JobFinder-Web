import React, { useState } from "react";
import * as Components from './Components';
import { useNavigate } from "react-router-dom";
import { auth } from '../../../Firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import {checkEmailExists} from './AuthenticationCheck'


function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }
  

  const sendNewPass = async (e) => {
    e.preventDefault();

    try {
      const emailExists = await checkEmailExists(email);

      if (!emailExists) {
        alert('Email is not registered.');
        return;
      }

      sendPasswordResetEmail(auth, email)
        .then(() => {
          alert('Password reset email sent!');
        })
        .catch((error) => {
          console.error('Error sending password reset email:', error);
          alert('Error sending password reset email. Please try again.');
        });
    } catch (error) {
      alert('Error checking email. Please try again.');
    }
  }

  const login = () =>{
    navigate("/login");
  }

  return (
    <Components.ForgotPasswordContainer>
      <Components.Form onSubmit={sendNewPass}>
        <Components.Title>Forgot Password?</Components.Title>
        <Components.Paragraph>To reset your password, please provide your authenticated email address.</Components.Paragraph>
        <Components.Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
        />             
        <Components.Button 
          width="325px"
          type="submit" 
          >Send</Components.Button>
        <Components.SideBySide>
          <Components.Anchor href='#'>Remember your password? <span onClick={login}>Login here</span></Components.Anchor>
        </Components.SideBySide>
      </Components.Form>

    </Components.ForgotPasswordContainer>
  );
  }
  
  export default ForgotPassword;