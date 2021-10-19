import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const DentalServices = ({service}) => {
    const{_id, name, homeDetail, imgURL, details,sugesetion} = service
    return (
        <div id="services">
     <div className="pt-6 pb-12 bg-green-50 pt-20 ">  
  <div id="card" className="">
    <h2 className="text-center font-serif  uppercase text-4xl xl:text-5xl">{name}</h2>
  
    <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
      
      <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden
                                        bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
      
        <div className="h-72 w-auto md:w-1/2">
          <img className=" pr-1 border-dashed border-r-4 border-pink-600 inset-0 h-full w-full object-cover object-center" src={imgURL} alt="/" />
        </div>
       
        <div className="w-full  px-6 text-gray-800 flex flex-col justify-evenly">
          <h3 className="font-semibold text-3xl leading-tight truncate">{name}</h3>
          <h4 className="mt-2 text-xl">
            {homeDetail}
          </h4>
          <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
            {sugesetion}
          </p>
         <div>
         <Link to={`/detail/${_id}`}> <button className="border rounded-full px-5 py-1 bg-pink-600 text-white mb- my-4">Demo</button> </Link>
        <Rating
        className= " ml-20 text-yellow-500"
        initialRating={3}
        readonly
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
        />
         </div>

        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default DentalServices;