import Navbar from '@/app/about_comps/Navbar'
import React from 'react'
import Image from 'next/image'
import Footer from '@/app/home_comps/Footer'

const Page = () => {
  return (
    <>
      <Navbar/>
      <div>
        <p className='text-amber-400 text-2xl font-semibold text-center mt-10'>The Four Rightly Guided Caliph</p>
        <div className="grid grid-cols-1 md:grid-cols-2 p-10">
          {/* Column 1 */}
          <div className="p-4 md:order-last">
            <Image className='w-96' width={100} height={100} src="/teach/image 254 (1).svg" alt="" />
          </div>
          {/* Column 2 */}
          <div className="p-4 md:order-first">
            <div className='ms-2 md:ms-20 text-start'>
              <p>The four rightly guided caliphs, also known as the Khulafa Rashidun, are considered to be the first four leaders of the Islamic community after the death of Prophet Muhammad. They are :  </p>
              <br />
              <ul>
                <li>1. Abubakr as-Siddiq</li>
                <li>2. Umar ibn al-Khattab</li>
                <li>3. Uthman ibn Affan</li>
                <li>4. Ali ibn Abi Talib</li>
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
