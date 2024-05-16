"use client";
import React from 'react';
import Navbar from '../about_comps/Navbar';
import Image from 'next/image';
import Footer from '../home_comps/Footer';
import Link from 'next/link';

const Page = () => {
  const allCardDisplay = [
    {
      image: "/teach/image 26.svg",
      textHeader: "Pillars of Islam:",
      text: "The Pillars of Islam are essentials and must-know for all Muslims",
      bgColor: "#3935B5",
      link: "our_teachings/pillars_of_islam"
    },
    {
      image: "/teach/image 28.svg",
      textHeader: "Articles of Faith:",
      text: "The Articles of Faith are an important part of Islamic Teachings",
      bgColor: "#FF7676",
      link: "our_teachings/faith"
    },
    {
      image: "/teach/image 244.svg",
      textHeader: "Stories of the Prophet:",
      text: "Allah sent the prophets to guide mankind, each prophet as his own followers. The stories of the Prophets teaches us some moral values to add to our daily lives",
      bgColor: "#FF4B91",
      link: "our_teachings/prophets"
    },
    {
      image: "/teach/image 246.svg",
      textHeader: "Stories of the Companions:",
      text: "The stories of the companions of Prophet Muhammad (SAW) let us know the followers of the Prophet Muhammad (SAW) and those that ruled after the death of Prophet Muhammad (SAW)",
      bgColor: "#FFCD4B",
      link: "our_teachings/guilded"
    },
    {
      image: "/teach/image 221.svg",
      textHeader: "Du'a:",
      text: "Du’a is an essential part of the daily lives of every Muslims",
      bgColor: "#FF7676",
      link: "our_teachings/dua"
    },
    {
      image: "/teach/image 249.svg",
      textHeader: "99 Names of Allah:",
      text: "It is good to call upon Allah using His names",
      bgColor: "#FF7676",
      link: "our_teachings/allah"
    },
  ];

  return (
    <>
      <Navbar />
      <div>
        <p className='text-2xl font-semibold text-center m-5'>Our Teachings</p>
      </div>
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 w-full sm:w-3/4 lg:w-3/5 px-4">
        {allCardDisplay.map((card, index) => (
          <div key={index} className="card w-80 rounded py-14" style={{ backgroundColor: card.bgColor }}>
            <Image className="w-64 mx-auto" src={card.image} alt={card.textHeader} width={100} height={100} />
            <div className='text-white ms-8'>
              <p className='text-start font-semibold mt-4'>{card.textHeader}</p>
              <p>{card.text}</p>
              <Link href={card.link}>
                <p className='font-semibold underline mt-4'>See more</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Page;
