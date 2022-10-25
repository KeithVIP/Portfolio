import React from 'react';
import Featured from '../components/Featured';
import Footer from '../components/Footer';

const FeaturedPage = () => {
    return (
        <div className='bg-paper bg-repeat w-full h-full'>
            <Featured />
            <Footer />
        </div>
    );
};

export default FeaturedPage;