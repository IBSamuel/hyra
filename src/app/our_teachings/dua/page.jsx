import Navbar from '@/app/about_comps/Navbar'
import React from 'react'
import Image from "next/image"
import Footer from '@/app/home_comps/Footer'

const page = () => {
  return (
    <>
    <Navbar/>
    <div>
        <p className='text-blue-700 text-2xl font-semibold text-center mt-10'>Du’a</p>
        <div className="grid grid-cols-1 md:grid-cols-2 p-10">
          {/* Column 1 */}
          <div className="p-4 md:order-last">
            <Image className='w-96' width={100} height={100} src="/teach/image 221.svg" alt="" />
          </div>
          {/* Column 2 */}
          <div className="p-4 md:order-first">
            <div className='ms-2 md:ms-20 text-start'>
              <p className='text-blue-700 font-semibold'>There are six Articles of Faith</p>
              <p>Du’a refers to the act of calling upon or praying to a Allah. It is also a means of seeking  Allah’s  guidance, protection, or blessings</p>
              
            </div>
          </div>
        </div>
        <Footer/>
      </div>

    </>
  )
}

export default page