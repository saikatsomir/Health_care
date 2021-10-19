import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div id="services sm: px-3">
        <div className="pt-6 pb-12 bg-green-100 pt-20 ">  
     <div id="card" className="">
       <h2 className="text-center font-serif  uppercase text-4xl xl:text-5xl">Blogs</h2>
       <Link to="/home"><button className="rounded px-5 ml-7 py-2 bg-pink-600 text-white mt-7 items-center"><i class="fas fa-arrow-left "></i> Home</button></Link>
            
     
       <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
         
         <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden
                                           bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
         
           <div className="h-72 w-auto md:w-1/2">
             <img className=" pr-1 border-dashed border-r-4 border-pink-600 inset-0 h-full w-full object-cover object-center" src='https://cleanhands-safehands.com/wp-content/uploads/2017/07/HealthcareDIVE.jpg' alt="/" />
           </div>
          
           <div className="w-full  px-6 text-gray-800 flex flex-col justify-evenly">
             <h3 className="font-semibold text-3xl leading-tight truncate">Chronic diseases</h3>
             <h4 className="mt-2">
           

Chronic diseases are a major stressor on the U.S. medical system, as roughly 60% of adults have at least one chronic condition, while about a tenth have two or more. Meanwhile, an estimated 84% of healthcare costs are attributed to treating chronic conditions alone.

And those figures are expected only to rise as the baby boomer generation ages and due to increased disease prevalence among children and younger adults, experts say, resulting in an even higher strain on the health ecosystem.
             </h4>
          
           </div>
           </div>
           <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden
                                           bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
         
           <div className="h-72 w-auto md:w-1/2">
             <img className=" pr-1 border-dashed border-r-4 border-pink-600 inset-0 h-full w-full object-cover object-center" src='https://www.variantyx.com/wp-content/uploads/HIT-consultant-logo.png' alt="/" />
           </div>
          
           <div className="w-full  px-6 text-gray-800 flex flex-col justify-evenly">
             <h3 className="font-semibold text-3xl leading-tight truncate">HIT Consultant.</h3>
             <h4 className="mt-2">
             – Coinciding with Cybersecurity Awareness Month this month, Nordic Consulting, a global health and technology consulting company, announced that it has opened its new security operations center (SOC) at its global headquarters in Madison, Wisconsin. SOC’s are a rising defense mechanism against cyber threats across industries – especially the healthcare industry, which has shown extreme vulnerability over recent years and since the pandemic has started.

– Cybersecurity risks continue to be top of mind for many healthcare organizations. Healthcare companies represent prime targets for phishing and ransomware attacks, with research showing that healthcare records can be valued at $1,000 or more per record depending on the richness of the personal data they contain.
             </h4>
           </div>
           </div>
           <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden
                                           bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
         
           <div className="h-72 w-auto md:w-1/2">
             <img className=" pr-1 border-dashed border-r-4 border-pink-600 inset-0 h-full w-full object-cover object-center" src='https://www.msms.org/Portals/0/EasyDNNnews/1884/MDHHS.jpg' alt="/" />
           </div>
          
           <div className="w-full  px-6 text-gray-800 flex flex-col justify-evenly">
             <h3 className="font-semibold text-3xl leading-tight truncate">HHS IDEA Lab</h3>
             <h4 className="mt-2">
             An estimated 850 million people worldwide are living with kidney disease. KidneyX exit disclaimer icon seeks to improve their lives by accelerating the development of drugs, devices, biologics, and other therapies across the spectrum of kidney care. KidneyX will 'de-risk' innovation by streamlining processes, reducing regulatory barriers, and modernizing the way everyone pays for treatment. By inviting innovation from outside the government, KidneyX will stimulate and accelerate innovation through a series of cash prize competitions.


             </h4>
             
           </div>
         </div>
           <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden
                                           bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
         
           <div className="h-72 w-auto md:w-1/2">
             <img className=" pr-1 border-dashed border-r-4 border-pink-600 inset-0 h-full w-full object-cover object-center" src='https://s3-prod.modernhealthcare.com/s3fs-public/styles/width_375/public/G_Phys-Foundation.jpg' alt="/" />
           </div>
          
           <div className="w-full  px-6 text-gray-800 flex flex-col justify-evenly">
             <h3 className="font-semibold text-3xl leading-tight truncate">Electronic Healt Records</h3>
             <h4 className="mt-2">
            
Most major electronic health records (EHRs) are good at identifying the current insurance status of patients. But it's usually impossible to know the precise amount of coverage and co-pay at point of care for specific orders or referrals. Health care providers simply can't tell if or how much an order is covered in the patient's plan.


             </h4>
             
           </div>
         </div>
       </div>
     </div>
   </div>
           </div>
    );
};

export default Blog;