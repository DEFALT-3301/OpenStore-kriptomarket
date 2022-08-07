import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import Market from './pages/market/Market';
import SalePage from './pages/SalePage';

const App = () => {
  return (
    <div >
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/profile" element={<ProfilePage />}/>
          <Route path="/market" element={<Market />}/>
          <Route path="/sale" element={<SalePage />}/>
        </Routes>
    </div>
  )
}

export default App;
