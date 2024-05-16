import React from 'react'
import Navbar from './home_comps/Navbar'
import Header from './home_comps/Header'
import Choose from './home_comps/Choose'
import Teachings from './home_comps/Teachings'
import SubFooter from './home_comps/SubFooter'
import Footer from './home_comps/Footer'



const page = () => {
  return (
    <>
        <Navbar/>
        <Header/>
        <Choose/>
        <Teachings/>
        <SubFooter/>
        <Footer/>
    </>
  )
}

export default page