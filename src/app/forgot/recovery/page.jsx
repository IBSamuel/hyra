import React from 'react'
import Image from 'next/image'

const Page = () => {
  return (
    <div className='flex justify-center mt-28'>
      <div className='justify-center mx-auto text-center w-42 '>
        <Image className='w-80 justify-center' src="/Frame 191.svg" width={100} height={100} alt="" />
        <p className='font-semibold'>Password Recovery Successful</p>
        <br />
        <span className='px-20 py-2 text-white bg-pink-500 rounded'>log in</span>
      </div>
    </div>
  )
}

export default Page
