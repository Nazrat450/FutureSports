import React from 'react';
import Logo from './Images/Logo.png';

const Footer = () => {
  return (
    <footer data-testid="footer">
      <div className="footer-content" data-testid="footer-content">
        <div className="footer-logo" data-testid="footer-logo">
          <img src={Logo} alt="FutureSports Logo" /> 
        </div>
        <div className="footer-links" data-testid="footer-links">
          <a href="Copyright.html">Copyright</a>
          <a href="Privacy.html">Privacy Statement</a>
          <a href="Contactus.html">Contact</a>
          <a href="Terms.html">Terms and Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;