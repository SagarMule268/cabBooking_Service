import React from 'react'

const ContactUs = () => {
  return (
    <div className="row ms-2 me-2 footer">
        
      <div className="col-lg-4 col-12 col-md-4">
        <h1>cab booking</h1>
        <p>Ride Easy, Ride Safe!</p>
      </div>
      <div className="col-lg-4 col-12 col-md-4 text-center">
        <h2 className=''>Useful Links</h2>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Login</li>
        </ul>
      </div>
      <div className="col-lg-4 col-12 col-md-4">
        <h2 className='text-center'>Contact Us</h2>
        <ul className='text-center'>
          <li className='text-center'>Email: manager@cabbooking.com</li>
          <li className='text-center'>Mobile No: 7894561235</li>
        </ul>
      </div>

    </div>
  )
}

export default ContactUs