import Navbar from '@/app/about_comps/Navbar'
import React from 'react'
import Image from 'next/image'
import Footer from '@/app/home_comps/Footer'

const Page = () => {
  return (
    <>
      <Navbar/>
      <div>
        <p className='text-blue-700 text-2xl font-semibold text-center mt-10'>Pillars of Islam</p>
        <div className="grid grid-cols-1 md:grid-cols-2 p-10">
          {/* Column 1 */}
          <div className="p-4 md:order-last">
            <Image className='w-96' width={100} height={100} src="/teach/image 26.svg" alt="" />
          </div>
          {/* Column 2 */}
          <div className="p-4 md:order-first">
            <div className='ms-2 md:ms-20 text-start'>
              <p className='text-blue-700 font-semibold'>There are five pillars of Islam</p>
              <p>The Pillars of Islam are as follows</p>
              <br />
              <ul>
                <li>1. Shahadah</li>
                <li>2. Salat</li>
                <li>3. Zakat</li>
                <li>4. Sawn</li>
                <li>5. Hajj</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Page
