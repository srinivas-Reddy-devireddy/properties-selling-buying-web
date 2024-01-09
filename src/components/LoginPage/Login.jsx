import React, { useState } from 'react';
import './login.css'
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
   
  const handleLogin = () => {
    // Basic validation (you should use a more secure method)
    if (username ==='hometownslands' && password === 'hometownslands@123' ) {
      onLogin();
    } else {
      alert('Invalid username or password. Try again.');
    }
  };
  

  return (
    <div className='login-section'>
      <div className='welcome-to-login-container'>
      <div className="logo-login">
       <h2>
         <span>H</span>ome
         <span>T</span>owns
         <span>L</span>ands
        
        </h2>
       
       
     </div>
     <h1 className='welcome'>Welcome to....</h1>
      </div>
      <div className='login-container'>
      <h2>Login</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <div className='remember'>
        <input type="checkbox" /> <span>Remember me</span>
      </div>
      <button onClick={handleLogin}>Login</button>
 
      </div>
        </div>
  );
};

export default Login;
