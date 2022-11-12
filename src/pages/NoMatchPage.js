import React from 'react';
import Footer from '../components/Footer';

const NoMatchPage = () => {
    return (
        <>
            <div>
                Opps, we couldn't find that page.
            </div>
            <Footer />
            <div className='flex justify-center'>&copy; {new Date().getFullYear()}All rights reserved.</div>
        </>
    );
};

export default NoMatchPage;