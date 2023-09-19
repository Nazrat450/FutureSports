import React from 'react';
import './App.css';

const ScrollToTopButton = () => {
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button className="scrollToTopButton" onClick={scrollToTop}>
      Scroll to Top
    </button>
  );
};

export default ScrollToTopButton;