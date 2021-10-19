import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner  gap-12 items-center  bg-banner">
           <div className="banner-title">
               <h1 className="text-6xl mb-3 font-semibold">Alexa Bellie</h1>
               <h2 className="text-4xl text-blue-400  font-semibold pb-3 "><Link className="hover:text-blue-700 hover:underline" to="/home">Home</Link> | <Link className="hover:text-blue-700 hover:underline" to="/about">About Us</Link></h2>
               <h3 className="text-2xl">Good looking people with strong, fluoridated teeth get things handed to them on platters.</h3>
           </div>
           <div className="banner-img">
           <img  src="https://i.ibb.co/GdMDW6y/Young-female-doctor-with-glasses-696x464-removebg-preview.png" alt="" />
           </div>
        </div>
    );
};

export default Banner;