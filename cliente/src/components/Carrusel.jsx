import React, { useState, useEffect } from 'react';

const Carrusel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    './80.jpeg',
    './81.jpeg',
    './82.jpeg',
    './83.jpeg',
    './84.jpeg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[400px] overflow-hidden bg-[#161616] md:hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Imagen ${index + 1}`}
          className={`absolute w-full h-auto object-cover transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
    </div>
  );
};

export default Carrusel;
