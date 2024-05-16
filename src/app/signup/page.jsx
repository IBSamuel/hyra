"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Footer from '../home_comps/Footer';

const Page = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const result = await axios.post(`api/users/signin`, formData);
      console.log(result);
      router.push("/signin");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'An error occurred. Please try again.');
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row p-0 md:p-20 shadow-lg bg-amber-500 md:bg-white">
        <div className="flex-1 p-4">
          <div>
            <p className='font-semibold mb-5 text-white md:text-black'>Create Account</p>
            <form onSubmit={handleSubmit} className='bg-white p-5 rounded'>
              <div className="mb-5">
                <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="bg-gray-50 border border-amber-500 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-amber-500 dark:placeholder-gray-400 dark:text-white"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email/Phone Number</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="bg-gray-50 border border-amber-500 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-amber-500 dark:placeholder-gray-400 dark:text-white"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-5">
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="bg-gray-50 border border-amber-500 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-amber-500 dark:placeholder-gray-400 dark:text-white"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="bg-gray-50 border border-amber-500 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-amber-500 dark:placeholder-gray-400 dark:text-white"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-5">
                <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="bg-gray-50 border border-amber-500 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-amber-500 dark:placeholder-gray-400 dark:text-white"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                {formData.password !== formData.confirmPassword && (
                  <p className="text-red-500">Passwords do not match.</p>
                )}
              </div>

              {error && <p className="text-red-500">{error}</p>}

              <button type="submit" className="rounded w-full text-dark md:text-white bg-white md:bg-amber-500 border border-amber-500 hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium text-sm px-5 py-2.5 text-center">
                Submit
              </button>

              <button type="button" className="rounded w-full mx-auto mt-5 justify-center flex border border-amber-500 hover:bgorder-amber-600 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium text-sm px-5 py-2.5 text-center">
                <Image className='w-10' width={100} height={100} src="/Google_Icons.webp" alt="Continue with Google" />
                <span className='mt-2'>Continue With Google</span>
              </button>

            </form>
          </div>
        </div>
        <div className="flex-1 p-4 hidden md:block">
          <Image width={100} height={100} className="w-64 m-10" src="/image 249.png" alt="Teaching Image" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
