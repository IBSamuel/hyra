import Navbar from '@/app/about_comps/Navbar'
import React from 'react'
import Image from "next/image"
import Footer from '@/app/home_comps/Footer'

const page = () => {
  return (
    <>
    <Navbar/>
    <div>
        <p className='text-blue-700 text-2xl font-semibold text-center mt-10'>Articles of Faith</p>
        <div className="grid grid-cols-1 md:grid-cols-2 p-10">
          {/* Column 1 */}
          <div className="p-4 md:order-last">
            <Image className='w-96' width={100} height={100} src="/image 241.png" alt="" />
          </div>
          {/* Column 2 */}
          <div className="p-4 md:order-first">
            <div className='ms-2 md:ms-20 text-start'>
              <p className='text-blue-700 font-semibold'>There are six Articles of Faith</p>
              <p>The Articles of Faith are as follows:</p>
              <br />
              <ul>
                <li>1. Belief  in the Oneness of Allah</li>
                <li>2. Belief  in the Angels</li>
                <li>3. Belief  in the  Prophets</li>
                <li>4. Belief in the Holy Book</li>
                <li>5. Belief  in the Day of Judgement</li>
                <li>6. Belief in Destiny (Qadar)</li>
              </ul>
            </div>
          </div>
        </div>
        <Footer/>
      </div>

    </>
  )
}

export default page