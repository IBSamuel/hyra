"use client"
import { useState } from 'react';

const Teachings = () => {
  // Define cardsArray in the outer scope
  const cardsArray = [
    { text: 'Pillars of Islam', color: 'border-purple-500' },
    { text: 'Articles of Faith', color: 'border-blue-500' },
    { text: 'Stories of the Prophets', color: 'border-red-500' },
    { text: 'What are the 99 Names of Allah', color: 'border-red-500' },
    { text: 'Du’a', color: 'border-blue-500' },
    { text: 'The Four Rightly Guided Caliph', color: 'border-yellow-500' },
  ];

  // State to manage the visibility of cards
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <br />
      <br />
      <p className='text-center text-2xl font-semibold'>Our Teachings</p>
      <div className='m-10 grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* Map over the cardsArray to display each card */}
        {cardsArray.slice(0, showAll ? cardsArray.length : 3).map((card, index) => (
          <div key={index} className=''>
            <div className=''>
              {/* Display card with details from the array */}
              <span className={`block px-6 h-44 flex items-center justify-center rounded border ${card.color} font-bold text-2xl text-center`}>{card.text}</span>
            </div>
          </div>
        ))}
      </div>
      {/* Display "View All" button only if not all cards are shown */}
      {!showAll && (
        <div className='text-center justify-center'>
          <button onClick={() => setShowAll(true)} className='bg-blue-800 text-white rounded py-1 px-10 mb-5'>View all →</button>
        </div>
      )}
    </>
  );
};

export default Teachings;
