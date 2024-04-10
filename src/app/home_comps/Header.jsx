
import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">

        <div className="order-1 md:order-2  p-4">
       </div>

        <div className="order-2 md:order-1  p-4">

          <p className="md:ps-12 mt-20 sm:text-3xl md:text-5xl font-semibold">Discover a world where education meets excitement</p>
          <p className='md:ps-12'>Our Islamic app for kids is designed to inspire and teach in the most enjoyable way. Our app is not just educational; its an adventure in faith</p>
        </div>
      </div>
    </>
  );
};

export default Header;
