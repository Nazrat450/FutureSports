import React, { useState } from 'react';
import './App.css';
import image1 from "./Images/image1.jpg";
import image2 from "./Images/image2.jpg";
import image3 from "./Images/image3.jpg";

function ImageCarousel() {
  const [current, setCurrent] = useState(0);
  const images = [image1, image2, image3];

  const goToPrev = () => setCurrent(current === 0 ? images.length - 1 : current - 1);
  const goToNext = () => setCurrent((current + 1) % images.length);

  return (
    <div className="carousel-container">
      <img src={images[current]} alt="" className="carousel-image" />
      <button onClick={goToPrev} className="prev-button">Prev</button>
      <button onClick={goToNext} className="next-button">Next</button>
    </div>
  );
}
export default ImageCarousel;