import React from 'react';
import Menu from '../Menu';
import Banner from '../Banner';
import Ourservices from '../Ourservices';
import Plans from '../Plans';
import Footer from '../Footer';
import Services from '../services/Services';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Ourservices></Ourservices>
            <Plans></Plans>
            <Services></Services>
        </>
    );
};

export default Home;