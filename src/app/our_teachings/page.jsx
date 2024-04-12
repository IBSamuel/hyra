import Navbar from '@/app/about_comps/Navbar'
import React from 'react'
import Image from 'next/image'
import Footer from '@/app/home_comps/Footer'

const Page = () => {
    return (
        <>
            <Navbar />
            <div>
                <p className='text-blue-700 text-2xl font-semibold text-center mt-10'>Who are the Prophets?</p>
                <div className="grid grid-cols-1 md:grid-cols-2 p-10">
                    {/* Column 1 */}
                    <div className="p-4 md:order-last">
                        <Image className='w-96' width={100} height={100} src="/image 241.png" alt="" />
                    </div>
                    {/* Column 2 */}
                    <div className="p-4 md:order-first">
                        <div className='ms-2 md:ms-20 text-start'>
                            <p className='text-blue-700 font-semibold'>There are five pillars of Islam</p>
                            <p>The Pillars of Islam are as follows</p>
                            <div>Prophets are special people chosen by Allah to guide and teach mankind. Each prophet faced challenges but stayed strong in their faith.
                                They performed miracles as a sign of Allah's power. Prophets taught people to worship and obey Allah.
                            </div>
                        </div>
                    </div>
                </div>
                <p className='text-blue-700 text-2xl font-semibold text-center mt-10'>How do you show respect to the prophets?</p>
                <div className="grid grid-cols-1 md:grid-cols-2 p-10">
                    {/* Column 1 */}
                    <div className="p-4 md:order-first">
                        <Image className='w-96' width={100} height={100} src="/image 241.png" alt="" />
                    </div>
                    {/* Column 2 */}
                    <div className="p-4 md:order-last">
                        <div className='ms-2 md:ms-20 text-start'>
                            <p className='text-blue-700 font-semibold'>How do you show respect to the prophets?</p>
                            <div>
                                When the name of the Prophets is mentioned we should say “Allahi salatu wa salam” meaning “Peace and Blessings of Allah be upon him”
                                When the name of Prophet Muhammad is mentioned we should say “Sallallahu alayhi Wasallam,” meaning “May the peace and blessings of Allah be upon him”
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Page
