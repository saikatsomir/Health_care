import React from 'react';

const AboutUs = () => {
    return (
        <div>
           <div className="lg:flex lg:items-center lg:px-20 py-12">
               <div>
               <img width="1200px"  src="https://i.ibb.co/GdMDW6y/Young-female-doctor-with-glasses-696x464-removebg-preview.png" alt="" />
               </div>
               <div className="lg:pl-20">
                   <p className="text-2xl font-semibold items-center"><span className="text-red-500">|</span>DENTAL CONSULTANT</p>
                   <h1 className="text-5xl font-bold">Alexa Bellie</h1>
                   <h1 className="text-xl font-semibold">A dentist, also known as a dental surgeon, is a medical professional who specializes in dentistry, the diagnosis, prevention, and treatment of diseases and conditions of the oral cavity. The dentist's supporting team aids in providing oral health services.</h1>
               </div>
           </div>
                       

            <div className="lg:flex text-center lg:gap-20 lg:px-20 mt-28">
                <div>
                    <i className="fas fa-heartbeat fa-3x text-indigo-900"></i>
                    <h1 className="lg:text-3xl font-bold text-indigo-900">
                        Health Check
                    </h1>
                    <h2 className="lg:text-xl text-gray-400">
                    Trusted results for Medical Insurance In Us. Check Visymo Search for the best results! Unlimited Access. 100% Secure. Always Facts. Privacy Friendly. 
                    </h2>
                </div>
                <div>
                    <i className=" fas fa-prescription-bottle-alt fa-3x text-indigo-900"></i>
                    <h1 className="lg:text-3xl font-bold text-indigo-900">
                        Tabs and Pills
                    </h1>
                    <h2 className="lg:text-xl text-gray-400">
                    They're an inexpensive, safe, and effective way to deliver oral medication. These units of medication are made by compressing one or more powdered ingredients to form a hard and solid.
                    </h2>
                </div>
                <div>
                    <i className="fas fa-ambulance fa-3x  text-indigo-900"></i>
                    <h1 className="lg:text-3xl font-bold text-indigo-900">
                        Ambulance Car
                    </h1>
                    <h2 className="lg:text-xl text-gray-400">
                    They can rapidly transport paramedics and other first responders to the scene, carry equipment for administering emergency care and transport patients to hospital or other definitive care
                    </h2>
                </div>
            </div>
            

           {/* 







 */}
            <div className="lg:flex text-center lg:gap-20 lg:px-20 my-28">
                <div>
                    <i className="fas fa-hand-holding-medical fa-3x text-indigo-900"></i>
                    <h1 className="lg:text-3xl font-bold text-indigo-900">
                    Intensive care
                    </h1>
                    <h2 className="lg:text-xl text-gray-400">
                   Our Intensive care refers to the specialised treatment given to patients who are acutely unwell and require critical medical care.
                    </h2>
                </div>
                <div>
                    <i className=" fas fa-globe fa-3x text-indigo-900"></i>
                    <h1 className="lg:text-3xl font-bold text-indigo-900">
                        Online Medicine
                    </h1>
                    <h2 className="lg:text-xl text-gray-400">
                    Online clinics only prescribe a limited number of medicines and do not replace regular doctors working from surgeries. There are various ways the doctors carry
                    </h2>
                </div>
                <div>
                    <i className="fas fa-vials fa-3x  text-indigo-900"></i>
                    <h1 className="lg:text-3xl font-bold text-indigo-900">
                        Lab Tests
                    </h1>
                    <h2 className="lg:text-xl text-gray-400">
                        Behind the word mountains, far from the countries Vokalia and Consonantia, there live the texts.
                    </h2>
                </div>
            </div>


        </div>
    );
};

export default AboutUs;