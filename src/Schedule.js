import React from 'react';


const Schedule = () => {
  return (
    
    <section id="schedule"> 
      <div className="content">
        <h2>2023 Q4 Match Schedule</h2>
        <div className="table-container">
          <table>
            <thead> 
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Opponent</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>26/08/2023</td>
                <td>3:45PM</td>
                <td>England</td>
                <td>Epping</td>
              </tr>
              <tr>
                <td>28/08/2023</td>
                <td>1:45PM</td>
                <td>America</td>
                <td>Ruthern</td>
              </tr>
              <tr>
                <td>02/09/2023</td>
                <td>5:45PM</td>
                <td>Norway</td>
                <td>Lalor</td>
              </tr>
              <tr>
                <td>13/09/2023</td>
                <td>8:30PM</td>
                <td>Spain</td>
                <td>Thomastown</td>
              </tr>
              <tr>
                <td>20/09/2023</td>
                <td>3:45PM</td>
                <td>England</td>
                <td>Lalor</td>
              </tr>
              <tr>
                <td>1/10/2023</td>
                <td>9:45PM</td>
                <td>Spaind</td>
                <td>Bell</td>
              </tr>
              <tr>
                <td>30/10/2023</td>
                <td>6:45PM</td>
                <td>Sweden</td>
                <td>Epping</td>
              </tr>
            </tbody>
          </table>
        </div>
       
      </div>
    </section>
  );
};

export default Schedule;