import React from 'react';
import Featured from '../components/Featured';
import Footer from '../components/Footer';
import Header from '../components/Header';

const FeaturedPage = () => {
    return (
        <div className='bg-paper bg-repeat w-full h-full'>
            <Header />
            <Featured />
            <Footer />
        </div>
    );
};

export default FeaturedPage;