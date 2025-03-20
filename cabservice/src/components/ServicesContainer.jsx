import React from 'react'
import CabBookingServices from './CabBookingServices'

const ServicesContainer = () => {
    
const services = [
    {
      title: "User Services",
      description:
        "Book rides instantly, schedule trips, track your cab in real-time, estimate fares, and make payments via cash, card, or wallet.",
    },
    {
      title: "Driver Services",
      description:
        "Receive ride requests, navigate seamlessly, track earnings, toggle availability, and get rated by users.",
    },
    {
      title: "Admin Services",
      description:
        "Manage users, drivers, bookings, payments, disputes, and pricing. Monitor analytics and business performance.",
    },
   
  ];
  return (
    <div className='mx-auto  p-2 service-container'>
        <h1 className='text-center p-8 mb-5 '>Our Services</h1>
        <CabBookingServices services={services} />
    </div>
  )
}

export default ServicesContainer
