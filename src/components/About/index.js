import React from 'react';

const About = () => {
    return (
        <section id='about' className='min-h-screen flex justify-center items-center px-2 bg-vintage bg-repeat-y'>
            <div id='container' className='w-4/5 flex flex-col justify-center items-center drop-shadow-shade'>
                {/* <h1 className='z-10 animate-slider1 font-black text-4xl laptop:text-7xl font-Cutive text-c-black text-black'>ABOUT</h1> */}
                <p className="z-10 animate-slider1 font-Josefin font-bold rounded-xl p-2 px-4 bg-c-white text-justify text-2xl max-w-sm tablet:max-w-md laptop:max-w-lg laptop:text-4xl desktop:max-w-4xl">
                    As a self-motivated software developer, I am searching for a
                    company that I will be able to further grow in and give back to.
                    I have the intention of contributing an advancing repertoire of knowledge
                    to my team every step of the way!
                </p>
                {/* <span className='absolute animate-bounce left-10 z-0 flex justify-center bg-c-blue rounded-full' style={{ height: '250px', width: '250px' }}></span>
                <span className='absolute animate-bouncey right-10 z-0 flex justify-center bg-c-blue rounded-full' style={{ height: '200px', width: '200px' }}></span> */}
            </div>
        </section>
    );
};

export default About;