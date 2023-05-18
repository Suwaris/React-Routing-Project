import React, { useState } from 'react';
import classes from './LoginPage.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleSignIn = () => {
   
        // Get user data from local storage
        const storedUser = localStorage.getItem('user');
        
        if (storedUser) {
            // Parse the stored user data
            const parsedUser = JSON.parse(storedUser);
            const storedEmail = parsedUser.email;
            const storedPassword = parsedUser.password;

            // Compare user input with stored credentials
            if (email === storedEmail && password === storedPassword) {

             // Redirect to the home page
             navigate("/", { replace: true });
             console.log('Successfully login');

            } else {
            console.log('Invalid login');
            // Perform actions for invalid login
            }
        } else {
            console.log('User not found');
            // Handle the case when no user is registered
        }
    };
  
    return (
      <div className='modal'>
        <h2 className='heading'>Sign In</h2>
        <form className='modal-content animate'>
            <div>
                <label htmlFor="uname"><b>Username</b></label>
                <input className='input' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>

                <label htmlFor="psw"><b>Password</b></label>
                <input className='input' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className='button' type="button" onClick={handleSignIn}>Sign In</button>
            <label>
                <input type="checkbox" checked="checked" name="remember"/> Remember me
            </label>
            <Link to='/register-user' className='link-signup'>Signup</Link>
        </form>
      </div>
    );
  };

export default LoginPage;