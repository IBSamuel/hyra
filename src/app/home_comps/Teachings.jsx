"use client"
import Link from 'next/link';
import { useState } from 'react';

const Teachings = () => {
  // Define cardsArray in the outer scope
  const cardsArray = [
    { text: 'Pillars of Islam', color: 'border-purple-500',link: "our_teachings/pillars_of_islam" },
    { text: 'Articles of Faith', color: 'border-blue-500',link: "our_teachings/faith" },
    { text: 'Stories of the Prophets', color: 'border-red-500',link: "our_teachings/prophets" },
    { text: 'What are the 99 Names of Allah', color: 'border-red-500', link: "our_teachings/allah" },
    { text: 'Du’a', color: 'border-blue-500',link: "our_teachings/dua" },
    { text: 'The Four Rightly Guided Caliph', color: 'border-yellow-500',link: "our_teachings/guilded" },
  ];

  // State to manage the visibility of cards
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <br />
      <br />
      <p className='text-center text-2xl font-semibold'>Our Teachings</p>
      <div className='m-10 grid grid-cols-1 md:grid-cols-3 gap-8'>
        {cardsArray.slice(0, showAll ? cardsArray.length : 3).map((card, index) => (
          <Link href={card.link} key={index} className=''>
            <div className=''>
              {/* Display card with details from the array */}
              <span className={`block px-6 h-44 flex items-center justify-center rounded border ${card.color} font-bold text-2xl text-center`}>{card.text}</span>
            </div>
          </Link>
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
