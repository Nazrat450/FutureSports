import React, { useState, useEffect } from 'react';
import './App.css';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Remove any existing highlights
    document.querySelectorAll('.highlight').forEach(span => {
      const text = span.innerText || span.textContent;
      span.outerHTML = text;
    });

    if (searchTerm === '') return;

    // Highlight new matches
    document.querySelectorAll('p').forEach(paragraph => {
      const innerHTML = paragraph.innerHTML;
      const regex = new RegExp(`(${searchTerm})`, 'gi');
      const newInnerHTML = innerHTML.replace(regex, '<span class="highlight">$1</span>');
      paragraph.innerHTML = newInnerHTML;
    });
  }, [searchTerm]);

  return (
    <div className="App">
     
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <style jsx>{`
        .highlight {
          background-color: yellow;
        }
      `}</style>
    </div>
  );
}

export default Search;