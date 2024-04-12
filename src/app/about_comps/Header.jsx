
import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 md:ms-20 m-5">

        <div className="order-1 md:order-2  p-4">
        <Image className='w-80' width={100} height={100} src="/image 250.png" alt="" />
       </div>

        <div className="order-2 md:order-1  p-4">

          <p className="md:ps-12 mt-20 sm:text-3xl md:text-5xl font-semibold">Hyra Islamic Stories for Kids</p>
          <br />
          <p className='md:ps-12'>Hyra Islamic Stories for Kids is an <br /> engaging and interactive Educational <br />
           app designed to introduce Islamic <br /> teachings to children.</p>
        </div>
      </div>
    </>
  );
};

export default Header;
