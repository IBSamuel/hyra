"use client"
import { useState, useEffect } from 'react';

const Teachings = () => {
  // State to track whether the button is clicked or not
  const [showAll, setShowAll] = useState(false);

  // Define cardsArray in the outer scope
  const cardsArray = [
    { text: 'Pillars of Islam', color: 'border-purple-500' },
    { text: 'Articles of Faith', color: 'border-blue-500' },
    { text: 'Stories of the Prophets', color: 'border-red-500' },
   
  ];

  // Function to handle click on the "View All" button
  const handleViewAllClick = () => {
    setShowAll(true);
  };

  useEffect(() => {
    // Check if running on client-side
    if (typeof window !== 'undefined') {
      // Check if there's a difference between server and client-side render
      if (!showAll) {
        // Display additional cards when "View All" button is clicked
        setShowAll(true);
      }
    }
  }, [showAll]); // Include showAll in dependencies to fix the hydration error

  return (
    <>
      <br />
      <br />
      <div className='m-10 grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* Map over the cardsArray to display each card */}
        {cardsArray.map((card, index) => (
          <div key={index} className=''>
            <div className=''>
              {/* Display card with details from the array */}
              <span className={`block px-6 py-20 rounded border ${card.color} font-bold text-2xl text-center`}>{card.text}</span>
            </div>
          </div>
        ))}
      </div>
      {/* Display "View All" button only if not all cards are shown */}
      {!showAll && (
        <div className='text-center justify-center'>
          <button onClick={handleViewAllClick} className='bg-blue-800 text-white rounded py-1 px-10'>View all →</button>
        </div>
      )}
    </>
  );
};

export default Teachings;
