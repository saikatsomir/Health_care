import React from 'react';
const serviceHeader = "https://i.ibb.co/wCPxPdH/Service-3.png"

const ServiceHeader = () => {
    return (
    <div>
            <div className="bg-green-50 lg:flex items-center lg:px-12 lg:py-20 ">
            <div className="sm: mb-7">
                
                <img width="600" src={serviceHeader} alt="" />
            </div>
            <div className="service-detail lg:pl-20 ">
                <h1 className="text-xl font-medium text-indigo-900">Pride in professional service</h1>
                <h2 className="text-5xl font-semibold text-indigo-900 mb-5">Walk into our 24 hours open clinic</h2>
                <h3 className="text-indigo-700 text-xl">We offer high quality medical and nursing care in a boutique setting which is elegant and cosy.</h3>

               <div className="flex sm: pl-9 mt-12">
                    
               <div className="text-xl text-gray-500 text-medium">
               <p>Monday:</p>
               <p className="text-green-500">Tuesday:</p>
               <p>Wednesday:</p>
               <p>Thursday:</p>
               <p>Friday:</p>
               <p className="text-red-500">Sat & Sun</p>
               </div>
               <div className="text-xl text-medium text-gray-500 ml-16 ">
                   <p>08am - 12am</p>
                   <p className="text-green-500">Free day</p>
                   <p>08am - 12am</p>
                   <p>08am - 12am</p>
                   <p>08am - 12am</p>
                   <p className="text-red-500">Closed</p>
               </div>
               </div>
            </div>
        </div>
    </div>
    );
};

export default ServiceHeader;