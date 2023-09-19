import React from 'react';
import './App.css';  
import Logo from './Images/Logo.png';
import Navigation from './Navigation';






const Header = () => {
  return (
    <header>
      <nav>
        <Navigation />
     
      </nav>
      <div className="header-logo">
        <img src= {Logo} alt="FutureSports Logo" />
        <h1>FutureSports</h1>
      </div>
      <div className="header-image">
        {/* Put any additional content here */}
      </div>
    </header>
  );
};

export default Header;