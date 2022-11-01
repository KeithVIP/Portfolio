import React from 'react';
import About from '../components/About';
import Hero from '../components/Hero';
import TechnologyList from '../components/TechnologyList';
import Footer from '../components/Footer';
import Header from '../components/Header';

const AboutPage = () => {
    return (
        <>
            <div className='bg-paper bg-cover bg-fixed w-full h-full z-0'>
                <Header />
                <Hero />
                <About />
                <TechnologyList />
                <Footer />
                <div className='flex justify-center'>&copy; {new Date().getFullYear()}All rights reserved.</div>
            </div>
        </>
    );
};

export default AboutPage;