import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Counter from '../components/Counter';


const Root = () => {
    return (
        <div className='mx-auto max-w-6xl'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Counter></Counter>
            <Footer></Footer>

        </div>
    );
};

export default Root;