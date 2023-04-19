import React from 'react';
import Menu from '../Menu';
import Banner from '../Banner';
import Ourservices from '../Ourservices';
import Plans from '../Plans';
import Footer from '../Footer';
import OurNumber from '../ourNumber/OurNumber';
import Whyweare from '../WhyWeAre/Whyweare';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Ourservices></Ourservices>
            <Plans></Plans>
            <OurNumber></OurNumber>
            <Whyweare></Whyweare>
        </>
    );
};

export default Home;