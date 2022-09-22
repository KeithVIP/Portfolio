import React, { useState, useEffect } from 'react';

const About = () => {
    return (
        <section id='about' className='min-h-screen bg-c-white flex items-center'>
            <div id='container'
                className='w-full leading-loose flex flex-col items-center'>
                <h1 className='z-10 animate-slider font-Meddon text-7xl'>Keith Yanosy</h1>
                <p className="z-10 animate-about font-Nanum text-xl text-justify bg-c-yellow rounded-xl p-3 max-w-sm md:max-w-md lg:max-w-lg">
                    As a self-motivated software developer, I am searching for a reliable
                    company that can provide a safe learning environment with the potential to establish my career
                    in
                    software development.
                </p>
                <span className='absolute animate-bounce left-10 z-0 flex justify-center bg-c-blue rounded-full' style={{ height: '250px', width: '250px' }}></span>
            </div>
        </section>
    );
};

export default About;