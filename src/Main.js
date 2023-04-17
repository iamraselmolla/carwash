import React from 'react';
import Menu from './componenets/Menu';
import { Outlet } from 'react-router-dom';
import Footer from './componenets/Footer';

const Main = () => {
    return (
        <main>
            <Menu></Menu>
            <Outlet></Outlet>
            <Footer></Footer>
        </main>
    );
};

export default Main;