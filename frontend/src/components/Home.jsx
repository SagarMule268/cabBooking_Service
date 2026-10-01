import React from 'react'
import  '../assets/css/home.css'
import Hero from './Hero'
import Navbar from './Navbar'
import header from '../assets/hero3.jpg'
import ServicesContainer from './ServicesContainer'
import ContactUs from './ContactUs'
import AboutUs from './AboutUs'
import { Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
function Home() {
  return (
    <>
    <div className='container-fluid' >
      
     
     
       <Hero header={header}/>
       <AboutUs/>
       <ServicesContainer/>
       <ContactUs/>
      
     </div>
   
   </>
  )
}

export default Home
