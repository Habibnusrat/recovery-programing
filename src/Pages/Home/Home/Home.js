import React from 'react';
import Services from '../Services/Services';
import Exparts from '../Exparts/Exparts';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <Exparts></Exparts>
        </>
    );
};

export default Home;