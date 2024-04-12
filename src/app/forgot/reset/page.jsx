import React from 'react';
import Image from "next/image"
import Footer from '@/app/home_comps/Footer';

const Page = () => {
  return (
    <div>
    <div className="grid grid-cols-1 md:grid-cols-2 mt-40 mb-40"> 
      {/* First Column */}
      <div className=" p-20">
      <div>
      <div>
      <p className='font-semibold'>Forgot Password</p>
      <label for="first_name" class="block mb-2 text-sm font-medium  ">Enter new password</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-pink-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password" required />
            <label for="first_name" class="block mb-2 text-sm font-medium  ">Confirm Password</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-pink-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password" required />
            <p className='bg-pink-400 text-white p-2 rounded m-2 text-center'>Reset Password</p>
        </div>
      </div>
      </div>

      {/* Second Column (Hidden on small screens) */}
      <div className="hidden md:block  p-4">
      <Image className='w-80' width={100} height={100} src="/image 250.png" alt="" />
      </div>
    </div>
    {/* <Footer className="mt-40" /> */}
    <Footer/>
    </div>
  );
};

export default Page;
