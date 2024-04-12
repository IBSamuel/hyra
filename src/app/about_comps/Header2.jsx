import React from 'react';
import Image from 'next/image';

const Header2 = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-blue-700 md:bg-blue-700 sm:bg-pink-500 p-10">
{/* Colum 1 */}
        <div className=" md:ms-20 md:float-end">
          <Image className='w-96' width={100} height={100} src="/image 241.png" alt="" />
        </div>

        <div className="p-4">

          <p className='md:pe-20 text-white text-start'>It has been observed that some children lack proper fundamentals of Islamic teachings. Hyra is introduced to help kids know about the Islamic Teachings.</p>
        </div>

      </div>
    </>
  );
};

export default Header2;
