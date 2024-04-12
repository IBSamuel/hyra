import React from 'react'
import Navbar from '../about_comps/Navbar'
import Header from '../about_comps/Header'
import Header3 from '../about_comps/Header3'
import Header2 from '../about_comps/Header2'
import Header4 from '../about_comps/Header4'
import Footer from '../home_comps/Footer'
import Googleplay from '../about_comps/Googleplay'

const page = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <Header2/>
    <Header3/>
    <Header4/>
    <Googleplay/>
    <Footer/>
    </>
  )
}

export default page