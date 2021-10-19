import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './DentalDetails.css'

const DentalDetails = () => {
    const{detailId} = useParams();
    const [detail, setDetail] = useState({})
    console.log('this',detail);
    useEffect(()=>{
            fetch('https://saikatsomir.github.io/ldhflsjf.github.io/detnal.json')
            .then(res => res.json())
            .then(data =>{
                console.log('data',data)
                const d = data?.find(para=>para._id == detailId)
                setDetail(d)
            })
    },[detailId])
    const {name, imgURL, details} = detail
    // {/* <span class="flex h-3 w-3">
    // <span class="animate-ping absolute  w-20 h-20 rounded-full bg-purple-400 "></span>
    // <span class="relative inline-flex rounded-full   bg-purple-500"></span>
    // </span> */}
    return (
      <div className="my-12">
          <h1 className="text-6xl text-center mt-20">Details</h1>
           <div className="detail mx-20 gap-12 items-center mt-20 ">
            <div className="detail-details w-3/5">
                
            <h1 className="text-5xl font-semibold pb-7 text-blue-300"> {name}</h1>
            <h2 className="text-2xl font-semibold">{details}</h2>
            <Link to="/home"><button className="rounded px-5 py-2 bg-pink-600 text-white mt-7 items-center"><i class="fas fa-arrow-left "></i> Home</button></Link>
            </div>
            
              <div>
              <img className="  detail-img rounded " width="1700px" src={imgURL} width="500px"  alt="" />
              </div>
       </div>
      </div>
    );
};

export default DentalDetails;