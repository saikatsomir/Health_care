import React from 'react';
import Dental from '../Services/Dental/Dental';
import Banner from './Banner/Banner';
import Header from './Home/Header/Header';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Dental></Dental>
        </div>
    );
};

export default Home;