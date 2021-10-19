import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  
    
    
    
   
    return (

       <div className="footer bg-footer p-7 pt-12">
           <div>
                <h3 className="text-5xl text-gray-200 pb-12">About This</h3>
         
               <h2 className="text-2xl text-gray-400">Pain is the most common complaint among those who have runner’s knee sometimes the pain</h2>
         
           </div>
            <div className="useful-links ml-12">
            <h1 className="text-2xl text-white font-semibold pb-5">Useful Links</h1>
         <Link className="text-gray-400 hover:text-pink-700 text-xl " to=" ">Home</Link><br />
         <Link className="text-gray-400 hover:text-pink-700 text-xl " to=" ">About</Link><br />
         <Link className="text-gray-400 hover:text-pink-700 text-xl " to="  ">Services</Link><br />
         <Link className="text-gray-400 hover:text-pink-700 text-xl " to=" ">Appoinment</Link><br />
         <Link className="text-gray-400 hover:text-pink-700 text-xl " to=" ">Pricing</Link><br />
         <Link className="text-gray-400 hover:text-pink-700 text-xl " to=" ">Contact</Link><br />
        </div>
        <div className="">
            <h1 className="text-2xl text-white font-semibold pb-5">Our Departments</h1>
         <Link className="text-gray-400 hover:text-pink-700 text-xl " to=" ">Successful Campaigns Usually Require A Campaign Manager To</Link><br />
         <Link className="text-gray-400 hover:text-pink-700 text-xl " to=" ">The Recorded Voice Scratched In The Speaker.</Link><br />
         <Link className="text-gray-400 hover:text-pink-700 text-xl " to=" ">The Sky Was Cloudless Of A Deep Dark Blue.</Link><br />
         <Link className="text-gray-400 hover:text-pink-700 text-xl " to=" "> A Shining Crescent Far The Flying Vessel.</Link><br />
        </div>
       <div className="footer-img ml-7">
       <img className="rounded"  src="https://i.ibb.co/T2RWVQP/kgk.png" width="380px" alt="" />
       </div>
       </div>
    );
};

export default Footer;