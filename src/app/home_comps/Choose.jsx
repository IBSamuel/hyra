import React from 'react';
import Image from 'next/image';

const Choose = () => {
  const cardsArray = [
    { 
      color: "pt-12 w-full max-w-xs bg-indigo-800 border rounded-lg",
      img: "/image 235.png",
      content: "Our app contains the fundamental teaching of Islam for Kids"
    },
    { 
      color: "pt-5 bg-red-500 w-full max-w-xs", 
      img: "/image 234.png",
      content: "We make it interesting by including the the Stories of the Prophets and his Companions" 
    },
    {
      color: "bg-pink-500 w-full max-w-xs",
      img: "/image 220.png",
      content: "As we all know that Du’a is an essential part of our life as a Muslim. Du’a is also included in our app"
    },
    {
      color: "pt-10 bg-yellow-300 w-full max-w-xs",
      img: "/image 220.png", 
      content: "Our app contains the 99 Names of Allah"
    },
    
  ];

  return (
    <>
    <div>
        <p className='text-center text-2xl font-semibold'>Why Choose Us</p>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 m-10">
        {cardsArray.map((card, index)  => (
          <div key={index} className="">
            <div className={`w-full max-w-xs border rounded-lg ${card.color}`}>
              <div className="flex justify-end px-4 pt-4">
              </div>
              <div className="flex flex-col items-center">
                {/* Use Image component for the image */}
                <Image className="p-4" width={200} height={200} src={card.img} alt="Bonnie image" />
                <span className="text-center p-4 text-white">{card.content}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Choose;
