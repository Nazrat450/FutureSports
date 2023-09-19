import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

function Navigation() {
  return (
    <nav className="navbar">
     
      <div className="nav-links">
        <Link to="PlayerSection" smooth={true} duration={500}>Players</Link>
        <Link to="NewsSection" smooth={true} duration={500}>News</Link>
        <Link to="RegisterSection" smooth={true} duration={500}>Register</Link>
        
    
      </div>
     
    </nav>
  );
}

export default Navigation;