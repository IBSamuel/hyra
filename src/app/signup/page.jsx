"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import * as Yup from 'yup';
import Navbar from '../home_comps/Navbar';
import Footer from '../home_comps/Footer';

const Page = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const schema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required')
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
    <div>   <div className="grid grid-cols-1 md:grid-cols-2">
      {/* First Column */}
      <div className=" p-4">
        {/* Content of the first column */}
        {/* Form Inputs */}
        <form className='shadow-lg md:p-10 md:m-10' onSubmit={handleSubmit}>
        <p className='font-semibold'>Create An Account</p>
          {/* Name Input */}
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium  text-amber-500">Your name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`bg-white border ${errors.name ? 'border-red-500' : 'border-amber-500'}border border-amber-500 text-amber-500 text-sm block w-full p-2.5 `}
              placeholder="Enter your name"
            />
            {errors.name && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.name}</p>}
          </div>
          {/* Email/Phone Number Input */}
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-amber-500">Email/Phone Number</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`bg-white border ${errors.email ? 'border-red-500' : 'border-amber-500'}border border-amber-500 text-amber-500 text-sm  block w-full p-2.5`}
              placeholder="Enter your email or phone number"
            />
            {errors.email && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.email}</p>}
          </div>
          {/* Username Input */}
          <div className="mb-6">
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-amber-500">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={`bg-white border ${errors.username ? 'border-red-500' : 'border-amber-500'}border border-amber-500 text-amber-500 text-sm block w-full p-2.5`}
              placeholder="Enter your username"
            />
            {errors.username && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.username}</p>}
          </div>
          {/* Password Input */}
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-amber-500">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`bg-white border ${errors.password ? 'border-red-500' : 'border-amber-500'} border border-amber-500 text-amber-500 text-sm  block w-full p-2.5`}
              placeholder="Enter your password"
            />
            {errors.password && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.password}</p>}
          </div>
          {/* Confirm Password Input */}
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-amber-500">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`bg-white border ${errors.confirmPassword ? 'border-red-500' : 'border-amber-500'}border border-amber-500 text-amber-500 text-sm block w-full p-2.5`}
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.confirmPassword}</p>}
          </div>
          {/* Submit Button */}
          <p type="submit" className="bg-amber-400 text-white text-center rounded py-2 px-6 font-semibold">Sign up</p>
          <br />
          <p type="submit" className="border border-amber-400 text-center justify-center rounded py-2 px-6 font-semibold flex"><Image className='w-8' width={500} height={500} src="/Google_Icons.webp" alt="" /> <span className='mt-1'>Continue With Google</span></p>
          
        </form>
      </div>

      {/* Second Column (Hidden on small screens) */}
      <div className="hidden md:block  p-4">
        {/* Content of the second column */}
        <Image className='w-80 mt-10' src="/image 249.png" width={100} height={100} alt="" />
      </div>
    </div>
    <Footer/>
    </div>
 
  );
};

export default Page;
