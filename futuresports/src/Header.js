import React from 'react';
import './App.css';  
import Logo from './Images/Logo.png'

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="Index.html">Home</a></li>
          <li><a href="Players.html">Players</a></li>
          <li><a href="news.html">News</a></li>
          <li><a href="Register.html">Register</a></li>
        </ul>
        <button id="loginBtn">Login</button>
        <div id="loginModal" className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
            <h2>Player/Coach Login</h2>
            <form>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
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