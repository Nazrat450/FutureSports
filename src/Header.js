import React from 'react';
import './App.css';  
import Logo from './Images/Logo.png';
import Navigation from './Navigation';






const Header = () => {
  return (
    <header data-testid="header">
      <nav data-testid="header-nav">
        <Navigation />
     
      </nav>
      <div className="header-logo" data-testid="header-logo">
        <img src= {Logo} alt="FutureSports Logo" />
        <h1>FutureSports</h1>
      </div>
      <div className="header-image" data-testid="header-image" >
       
      </div>
    </header>
  );
};

export default Header;