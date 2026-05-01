import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from './../components/sections/HeroSection';
import CallToAction from './../components/sections/CallToAction';


const Home = () => {
    return (
        <div>
            <Navbar/>
            <div className='min-h-screen'>
                <HeroSection/>
                <CallToAction/>
            </div>

            <Footer/>
            
        </div>
    );
};

export default Home;