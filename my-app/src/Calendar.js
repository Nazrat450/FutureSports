import React from 'react';
import Search from './Search';
const UpcomingEvents = () => {
  return (
    <div>
      <h1>Upcoming Events</h1>  <Search />
      <div className="calendar-container">
        <iframe 
          src="https://calendar.google.com/calendar/embed?src=matthewryanhill95%40gmail.com&ctz=Europe%2FLondon" 
          style={{border: 0}} 
          width="800" 
          height="600" 
          frameBorder="1" 
          scrolling="yes"
          title="Upcoming Events Calendar">
        </iframe>
      </div>
    </div>
  );
};

export default UpcomingEvents;