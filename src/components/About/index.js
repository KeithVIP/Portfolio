import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200
        });
    }, []);
    return (
        <section id='about' className='min-h-screen bg-c-blue flex items-center'>
            <div id='container'
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-delay=""
                data-aos-anchor=""
                data-aos-anchor-placement=""
                dara-aos-once=""
                className='w-full bg-c-black text-c-white leading-loose flex flex-col items-center'>
                <h1 className='font-Meddon text-[72px]'>Keith Yanosy</h1>
                <p className="font-Nanum text-[20px] text-justify max-w-sm md:max-w-md lg:max-w-lg">
                    As a self-motivated software developer, I am searching for a reliable
                    company that can provide a safe learning environment with the potential to establish my career
                    in
                    software development.
                </p>
            </div>
        </section>
    );
};

export default About;