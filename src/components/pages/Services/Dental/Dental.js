import React, { useEffect, useState } from 'react';
import DentalServices from '../DentalServices/DentalServices';

const Dental = () => {
    const [services, setServices] = useState([])
    // console.log(services);
    useEffect(()=>{
        fetch('https://saikatsomir.github.io/ldhflsjf.github.io/detnal.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="">
       {
           services.map(service => <DentalServices
           key={service.key}
           service={service}
           ></DentalServices>)
       }
        </div>
    );
};

export default Dental;