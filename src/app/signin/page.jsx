"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import * as Yup from 'yup';
import Navbar from '../home_comps/Navbar';
import Footer from '../home_comps/Footer';

const Page = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const schema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required')
  });

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    try {
      await schema.validateAt(name, { [name]: value });
      setErrors({
        ...errors,
        [name]: ''
      });
    } catch (error) {
      setErrors({
        ...errors,
        [name]: error.message
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await schema.validate(formData, { abortEarly: false });
      console.log(formData); // You can handle form submission here
      setErrors({});
    } catch (error) {
      const validationErrors = {};
      error.inner.forEach((e) => {
        validationErrors[e.path] = e.message;
      });
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* First Column */}
        <div className="p-4">
          {/* Content of the first column */}
          {/* Form Inputs */}
          <form className='shadow-lg md:p-10 md: md:-10 mt-32' onSubmit={handleSubmit}>
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
                className={`bg-white border ${errors.username ? 'border-red-500' : 'border-blue-700'} border border-blue-700 ext-sm block w-full p-2.5`}
                placeholder="Enter your username"
              />
              {errors.username && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.username}</p>}
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
                className={`bg-white border ${errors.password ? 'border-red-500' : 'border-blue-700'} border border-blue-700  text-sm block w-full p-2.5`}
                placeholder="Enter your password"
              />
              {errors.password && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.password}</p>}
            </div>
            {/* Remeneber Me */}
            <div class="flex items-center mb-4">
    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label class="ms-2 text-sm font-medium   ">Remember Me</label>
    <p class="md:ms-20 text-sm font-medium  ">Forgot Password</p>
</div>
            {/* Submit Button */}
            <p type="submit" className="bg-blue-700 text-white text-center rounded py-2 px-6 font-semibold">Sign in</p>
            <p className='flex'>
              <span>Don’t have an account?</span>
              <span className='float-end text-blue-700'>Sign Up</span>
            </p>
          </form>
        </div>

        {/* Second Column (Hidden on small screens) */}
        <div className="hidden md:block p-4">
          {/* Content of the second column */}
          <Image className='w-80 mt-10' src="/image 249.png" width={100} height={100} alt="" />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Page;
