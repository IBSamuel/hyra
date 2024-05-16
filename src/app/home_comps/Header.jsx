"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1); // Initialize nextIndex as the next image after currentIndex

  // Array of slide image sources
  const slideImages = [
    '/carousel/image 54.svg',
    '/carousel/image 53.svg',
    '/carousel/image 49.svg'
  ];

  // Function to increment slide index and update nextIndex
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
    setNextIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
  };

  useEffect(() => {
    // Automatically change slide every 5 seconds
    const interval = setInterval(nextSlide, 5000);

    return () => {
      clearInterval(interval); // Cleanup interval on component unmount
    };
  }, ); // Empty dependency array ensures effect runs once on component mount

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 m-10">
      <div className="order-1 md:order-2 p-4 relative">
        <div id="default-carousel" className="relative w-full h-96 overflow-hidden rounded-lg">
          {/* Render each slide based on currentIndex and nextIndex */}
          {slideImages.map((imageSrc, index) => (
            <div
              key={index}
              className="absolute w-full h-full transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(${index === currentIndex ? '0%' : '100%'})`, // Current slide visible, next slide off-screen
                left: `${index * 100}%`,
                visibility: index === currentIndex || index === nextIndex ? 'visible' : 'hidden', // Show only current and next images
              }}
            >
              <Image
                src={imageSrc}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="order-2 md:order-1 p-4">
        <p className="md:ps-12 mt-20 sm:text-3xl md:text-5xl font-semibold">Discover a world where <br /> education meets <br /> excitement</p>
        <p className="md:ps-12">Our Islamic app for kids is designed to inspire and teach in the most enjoyable way. Our app is not just educational; its an adventure in faith.</p>
      </div>
    </div>
  );
};

export default Header;
