import React from 'react';
import Image from "next/image"
import Footer from '@/app/home_comps/Footer';
import Link from 'next/link';

const Page = () => {
  return (
    <div>
    <div className="grid grid-cols-1 md:grid-cols-2 mt-40 mb-40"> 
      {/* First Column */}
      <div className=" p-20">
      <div>
      <div>
            <label for="first_name" class="block mb-2 text-sm font-medium  ">Enter Code sent to your Email/Phone number</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-pink-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John@gmail.com" required />
            <Link href="/forgot/reset" className='bg-pink-400 text-white p-2 rounded m-2 text-center'>Recover Password</Link>
            <p className='border border-pink-400 text-white p-2 rounded m-2 text-center'>Resend Code</p>
        </div>
      </div>
      </div>

      {/* Second Column (Hidden on small screens) */}
      <div className="hidden md:block  p-4">
      <Image className='w-80' width={100} height={100} src="/image 250.png" alt="" />
      </div>
    </div>
    <Footer className="mt-40" />
    </div>
  );
};

export default Page;
