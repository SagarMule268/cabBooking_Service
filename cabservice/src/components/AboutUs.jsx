import React from 'react';
import hero from '../assets/hero.jpg';
const AboutUs = () => {
    return (
        <div className="text-center">
            <h1 className='mb-5'>About Us</h1>
            
        <div className='row'>
            <div className="col-lg-6 col-md-6 col-12 about-img">
                <img src={hero} alt="about us" className="img-fluid" />
            </div>
            <div className="col-lg-6 col-md-6 col-12 about">
               
                <p>Welcome to our cab service. We are dedicated to providing the best transportation experience for our customers.</p>
                <p>Our mission is to offer reliable, safe, and comfortable rides at affordable prices.</p>
                <p>Thank you for choosing our service!</p>            

        
        </div>
        </div>
        </div>
    );
};

export default AboutUs;