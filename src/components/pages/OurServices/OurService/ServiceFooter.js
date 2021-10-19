import React from 'react';

const ServiceFooter = () => {
    const serviceFooter = "https://i.ibb.co/9vZrD4h/service3.png"
    return (
        <di className="lg:flex py-12 ">
            <div>
                <img  src={serviceFooter} alt="" />
            </div>
            <div className="lg:w-2/4 sm: px-2">
                <h1 className="lg:text-5xl sm: text-3xl font-semibold text-gray-700 mb-12 ">Hospital doctors examine patients so that they can diagnose</h1>
                <div className="flex items-center gap-7 lg:w-3/4 my-7 sm: m-0 sm: p-0">
              <div>
              <i style={{border:'2px solid white', padding:'10px 12px', borderRadius:'50%'}} className="fas fa-shopping-bag fa-2x bg-green-300 text-white"></i>
              </div>
                    <div>     
                        <h1 className="lg:text-2xl font-semibold">Intensive care</h1>
                        <p className="lg:text-xl ">Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                     </div>
                </div>
                <div className="flex items-center gap-7 lg:w-3/4 mb-7">
                    <div>
                    <i style={{border:'2px solid white', padding:'10px 12px', borderRadius:'50%'}} className="fas fa-heartbeat fa-2x text-white bg-indigo-600"></i>
                    </div>
                    <div>
                        <h1 className="lg:text-2xl font-semibold">
                                 Specialised Support Service
                        </h1>
                        <p className="lg:text-xl">Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                </div>
                <div className="flex items-center gap-7 lg:w-3/4 mb-7">
                    <div>
                    <i style={{border:'2px solid white', padding:'10px 12px', borderRadius:'50%'}} className="fas fa-user-md fa-2x text-white bg-indigo-900"></i>
                    </div>
                    <div>
                        <h1 className="lg:text-2xl font-semibold">
                                 Medical & Surgical
                        </h1>
                        <p className="lg:text-xl">Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                </div>
            </div>
        </di>
    );
};

export default ServiceFooter;