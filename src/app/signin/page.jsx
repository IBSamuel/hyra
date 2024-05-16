"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Footer from '../home_comps/Footer';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
    axios.post(`api/users/signin`, formData)
    .then((result) => {
      console.log(result);
      router.push("/our_teach")
    }).catch((err) => {
      console.log(err);
    });
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2">

        
        <div className="p-4">
          {/* Content of the first column */}
          {/* Form Inputs */}
          <form className='shadow-lg md:p-10 md:md:-10 mt-32' onSubmit={handleSubmit}>
            <p className='font-semibold'>Login to your account</p>
            {/* Username Input */}
            <div className="mb-6">
              <label htmlFor="username" className="block mb-2 text-sm font-medium">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="bg-white border border-blue-700 text-sm block w-full p-2.5"
                placeholder="Enter your username"
              />
            </div>
            {/* Password Input */}
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-blue-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="bg-white border border-blue-700 text-sm block w-full p-2.5"
                placeholder="Enter your password"
              />
            </div>
            {/* Remember Me and Forgot Password */}
            <div className="flex items-center mb-4">
              <input id="default-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
              <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium">Remember Me</label>
              <Link href='/forgot' className="ml-20 text-sm font-medium">Forgot Password</Link>
            </div>
            {/* Submit Button */}
            <button type="submit" className="bg-blue-700 text-white text-center rounded py-2 px-6 font-semibold">Sign in</button>
            {/* Sign Up Link */}
            <p className='flex'>
              <span>Don’t have an account?</span>
              <Link href="/signup" className='ml-auto nav-link text-blue-700'>Sign Up</Link>
            </p>
          </form>
        </div>

        {/* Second Column (Hidden on small screens) */}
        <div className="hidden md:block p-4">
        <Image width={100} height={100} className="w-64 m-10" src="/image 249.png" alt="" />

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
