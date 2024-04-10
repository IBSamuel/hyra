import React from 'react';
import Image from 'next/image';
const SubFooter = () => {
  return (
    <div className="grid grid-cols-2 gap-4 bg-rose-400">
      {/* Left column */}
      <div className="col-span-1 p-10">
        <p className='text-2xl text-white'>The Prophet (S.A.W) said <br /> “Seeking knowledge is an <br /> obligation upon every <br /> Muslim”</p>
        <span className='bg-white text-rose-400 rounded py-1 px-2 mt-5'>Get started with us → </span>
      </div>

      {/* Right column (will disappear on small screens) */}
      <div className="col-span-1 hidden sm:block">
        <Image className='w-80 m-10 float-center' src="/image 237.png" width={200} height={200} alt="" />
      </div>
    </div>
  );
};

export default SubFooter;
