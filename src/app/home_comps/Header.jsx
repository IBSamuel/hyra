
import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 m-10">

        <div className="order-1 md:order-2  p-4">
        <Image className='ms-32 w-80' width={100} height={100} src="/image 220.png" alt="" />
       </div>

        <div className="order-2 md:order-1  p-4">

          <p className="md:ps-12 mt-20 sm:text-3xl md:text-5xl font-semibold">Discover a world where <br /> education meets <br /> excitement</p>
          <p className='md:ps-12'>Our Islamic app for kids is designed to inspire and teach in the most enjoyable way. Our app is not just educational; its an adventure in faith</p>
        </div>
      </div>
    </>
  );
};

export default Header;
