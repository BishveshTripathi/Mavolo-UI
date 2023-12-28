import React, { useState, useEffect } from 'react';
import './corousal.css';
import HeroImage1 from '../../assets/HeroImage1.png';
import HeroImage2 from '../../assets/HeroImage2.png';
// import HeroImage3 from '../../assets/HeroImage3.gif';
import HeroImage4 from '../../assets/HeroImage4.png';

function App() {
  const images = [HeroImage1, HeroImage2, HeroImage4];

 const [currentIndex, setCurrentIndex] = useState(0);

 useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
 }, [images.length]);

 return (
   
      <div className="carousel">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="carousel"
            className={index === currentIndex ? 'active' : ''}
          />
        ))}
      </div>
    
 );
}

export default App;