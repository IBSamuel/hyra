import React from 'react';
import Image from 'next/image';

const Choose = () => {
  const cardsArray = [
    { 
      color: "bg-indigo-800",
      img: "/carousel/image 54.svg",
      content: "Our app contains the fundamental teachings of Islam for Kids",
    },
    { 
      color: "bg-red-500", 
      img: "/carousel/image 243.svg",
      content: "We make it interesting by including the Stories of the Prophets and his Companions" 
    },
    {
      color: "bg-pink-500",
      img: "/image 53.svg",
      content: "As we all know that Du’a is an essential part of our life as a Muslim. Du’a is also included in our app"
    },
    {
      color: "bg-yellow-300",
      img: "/image 254.svg", 
      content: "Our app contains the 99 Names of Allah"
    },
  ];

  return (
    <div className="mx-auto max-w-screen-xl px-4">
      <p className="text-center text-2xl font-semibold mb-8">Why Choose Us</p>
      <div className="grid grid-cols-1 md:grid-cols-4 ms-10 me-10 gap-2">
        {cardsArray.map((card, index)  => (
          <div key={index} className={`rounded rounded-5 shadow-lg ${card.color}`}>
            <div className={`h-60 relative ${card.color}`}>
              {/* Image container with relative positioning */}
              <Image
                src={card.img}
                alt="Card Image"
                layout="fill"
                objectFit="cover" // Ensure image covers the container
                className="rounded ps-10 pe-10 pt-10  " // Apply rounded corners to top of image
              />
            </div>
            <div className="p-4">
              <p className="text-center text-white mb-2">{card.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Choose;
