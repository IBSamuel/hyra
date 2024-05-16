import React from 'react';
import Image from 'next/image';

const Header4 = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-pink-500 p-10">
{/* Colum 1 */}
        <div className=" md:ms-20 md:float-end">
          <Image className='w-96' width={100} height={100} src="/image 243.svg" alt="" />
        </div>

        <div className="p-4">

          <p className='md:pe-20 text-white text-start'>The app combines Islamic teaching, Stories of the Prophet, Stories of the Companion, Du’a, quizzes and interactive activities to make learning about Islam enjoyable and fun for young mind</p>
        </div>

      </div>
    </>
  );
};

export default Header4;
