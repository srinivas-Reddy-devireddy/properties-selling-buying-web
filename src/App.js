
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/LoginPage/Login';
// import Navbar from './components/Navbar/Navbar';



const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform authentication logic here
    // For simplicity, let's assume the login is successful
    setLoggedIn(true);
  };
  return (
    <Router>
      
      <Routes>
        <Route path="/login" element={loggedIn ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />} />
       
        <Route path="/home" element={loggedIn ? <Home /> : <Navigate to="/login" />} />
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
     
    </Router>
  );
};


export default App;
