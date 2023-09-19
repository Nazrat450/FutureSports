import React from 'react';
import Search from './Search.js';

const NewsContent = () => {
  return (
    <div className="content-news">
    
      <h2>News</h2> <Search />
      
      <p>
      <h3>Star Striker Johnson Scores Hat-trick, Secures Victory for Riverdale United</h3>
       In a stunning display of skill and athleticism, Riverdale United's star striker, Emily Johnson, scored a hat-trick in yesterday's match against the Springfield Thunderbolts, ending the game 4-1 in favor of Riverdale.<br />
      Johnson's first goal came in the 12th minute, assisted by midfielder Tim Douglas. She followed it up with an exceptional solo effort in the 32nd minute and completed the hat-trick just before halftime.<br />
      <br />
      "Emily was simply unplayable today," said Riverdale coach, Alex Smith, in a post-match interview. "We knew she had it in her, and she delivered."
      
      <h3>Northside Wanderers Suffer Devastating Loss Due to Own Goal</h3>
        In a heartbreaking turn of events, Northside Wanderers lost 2-1 to Fairview FC after an own goal from veteran defender, David Williams, in the 87th minute. Despite their best efforts, <br />
        the Wanderers couldn't recover, leading to their third consecutive loss this season.<br />
        <br />
        "The loss is hard to swallow," Williams admitted in a post-match interview. "We'll pick ourselves up and come back stronger."<br />
        <br />
      <h3>Youth Sensation, Maria Gonzalez, Called Up for National Team</h3>
        18-year-old Maria Gonzalez, who has been setting the local league alight with her performances for Oakdale High, <br />
        has been called up for the national team's upcoming World Cup qualifiers. <br />
        This makes her the youngest player ever to receive a call-up for the senior squad.<br />
        <br />
        "She's a great talent and deserves the call-up," said national team coach, Casey Thompson.<br />
        <br />
      <h3>Lakeside FC Announces New Stadium Plans</h3>
        After years of speculation, Lakeside FC has finally announced plans for a new stadium. <br />
        The state-of-the-art facility will have a seating capacity of 60,000 and is expected to be ready for the 2025 season.<br />
        <br />
        "We're building a stadium that will be the envy of clubs around the world," said Lakeside's chairman, John Harris.<br />
        <br />
        </p>
<h3>Transfer Rumors: Tom Davis to Join Hillview Rovers?</h3>
Hillview Rovers are reportedly in advanced talks to sign the much-sought-after midfielder Tom Davis from Eastville Saints. <br />
Davis, who has scored 12 goals this season, could be a game-changer for Hillview as they aim for the championship.<br />
<br />
"The negotiations are confidential, but we're optimistic," said a spokesperson for Hillview Rovers.
      <div className="video-container">
        <h1>Highlight 19/04/22</h1>
        <iframe 
          src="https://www.youtube.com/embed/XMsR4Tinb24" 
          frameBorder="1" 
          allowFullScreen 
          title="Highlight Video">
        </iframe>
      </div>
    </div>
  );
};

export default NewsContent;