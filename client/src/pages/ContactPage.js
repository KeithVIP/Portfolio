import React from 'react';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';

const ContactPage = () => {
    return (
        <>
            <Header />
            <Contact />
            <Footer />
            <div className='flex justify-center'>&copy; {new Date().getFullYear()}All rights reserved.</div>
        </>
    );
};

export default ContactPage;