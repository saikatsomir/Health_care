import React from 'react';
import Dental from '../Services/Dental/Dental';
import ServiceFooter from './OurService/ServiceFooter';
import ServiceHeader from './OurService/ServiceHeader';


const Service = () => {
    return (
        <div>
            <ServiceHeader></ServiceHeader>
            <Dental></Dental>
            <ServiceFooter></ServiceFooter>
        </div>
    );
};

export default Service;