import React, { useState } from 'react';
import './App.css';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && searchTerm.length >= 3) {
      e.preventDefault();
      circleSearchTerm();
    }
  };

  const circleSearchTerm = () => {
    // Remove any existing circles
    removeCircles();

    if (searchTerm === '') return;

    // Circle new matches
    document.querySelectorAll('p').forEach(paragraph => {
      const innerHTML = paragraph.innerHTML;
      const regex = new RegExp(`\\b(${searchTerm})\\b`, 'gi');  // Note the word boundaries
      const newInnerHTML = innerHTML.replace(regex, '<span class="circle">$1</span>');
      paragraph.innerHTML = newInnerHTML;
    });
  };

  const removeCircles = () => {
    document.querySelectorAll('.circle').forEach(span => {
      const text = span.innerText || span.textContent;
      span.outerHTML = text;
    });
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        onBlur={removeCircles}  // Removes circles when input box loses focus
      />
    </div>
  );
}

export default Search;