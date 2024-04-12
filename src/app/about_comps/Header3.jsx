import React from 'react';
import Image from 'next/image';

const Header3 = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 p-10">
{/* Colum 1 */}

        <div className="p-4">

          <p className='ms-2 md:ms-20 text-start'>The target audience for this app is kids <br /> between the ages of 7-12</p>
        </div>
        <div className="p-4 md: md:float-end">
          <Image className='w-96' width={100} height={100} src="/image 241.png" alt="" />
        </div>

      </div>
    </>
  );
};

export default Header3;
