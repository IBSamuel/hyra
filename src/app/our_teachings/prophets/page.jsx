import Navbar from '@/app/about_comps/Navbar'
import React from 'react'
import Image from 'next/image'
import Footer from '@/app/home_comps/Footer'

const Page = () => {
    return (
        <>
            <Navbar />
            <div>
                <p className='text-pink-400 text-2xl font-semibold text-center mt-10'>Who are the Prophets?</p>
                <div className="grid grid-cols-1 md:grid-cols-2 p-10">
                    {/* Column 1 */}
                    <div className="p-4 md:order-last">
                        <Image className='w-72' width={100} height={100} src="/teach/image 54.svg" alt="" />
                    </div>
                    {/* Column 2 */}
                    <div className="p-4 md:order-first">
                        <div className='ms-2 md:ms-20 text-start mx-auto'>
                            <p className="w-3/5">Prophets are special people chosen by Allah  to guide and teach mankind. Each prophet faced challenges but stayed strong in their faith. <br />
                                They performed miracles as a sign of Allahs power. Prophets taught people to worship and obey Allah.


                            </p>

                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 p-10">
                    {/* Column 1 */}
                    <div className="p-4 md:order-first text-center mx-auto">
                        <Image className='w-80' width={100} height={100} src="/teach/image 252.svg" alt="" />
                    </div>
                    {/* Column 2 */}
                    <div className="p-4 md:order-last">
                        <div className='ms-2 md:ms-20 text-start'>
                        <p className="text-2xl font-semibold text-pink-500">How do you show respect to the prophets?</p>
                        <br />
                            <p className="w-3/5">
When the name of the Prophets  is been mentioned we should say “Allahi salatu wa salam” meaning “Peace and Blessings of Allah be upon him” <br />
When the name of Prophet Muhammad is been mentioned we should say “Sallallahu alayhi Wasallam,” meaning “May the peace and blessings of Allah be upon him”



                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Page
