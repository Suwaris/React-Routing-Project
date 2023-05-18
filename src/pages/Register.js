import React, { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
     // Create an object with the user's email and password
  const user = { email, password };

  // Store the user data in the local storage
  localStorage.setItem('user', JSON.stringify(user));

  // Display a success message or perform any other actions
  console.log('User signed up successfully');
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="button" onClick={handleSignUp}>Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
