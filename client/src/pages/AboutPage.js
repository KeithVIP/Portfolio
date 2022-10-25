import React from 'react';
import About from '../components/About';
import Hero from '../components/Hero';
import TechnologyList from '../components/TechnologyList';
import Footer from '../components/Footer';
import Header from '../components/Header';

const AboutPage = () => {
    return (
        <>
            <div className='bg-paper bg-fixed w-full h-full'>
                <Header />
                <Hero />
                <About />
                <TechnologyList />
                <Footer />
            </div>
        </>
    );
};

export default AboutPage;