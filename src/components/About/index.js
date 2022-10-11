import React from 'react';

const About = () => {
    return (
        <section id='about' className='min-h-screen flex items-center justify-center font-cutive px-2'>
            <div id='container' className='w-4/5 flex flex-col items-center'>
                <h1 className='z-10 animate-slider3 font-cutive font-black text-4xl laptop:text-7xl'>About</h1>
                <p className="z-10 animate-slider1 font-Cutive font-bold text-lg laptop:text-2xl text-c-white bg-c-shade rounded-xl p-2.5 text-center max-w-lg tablet:max-w-md laptop:max-w-lg">
                    As a self-motivated software developer, I am searching for a
                    company that I will be able to further grow in and give back to.
                    I have the intention of contributing an advancing repertoire of knowledge
                    to my team every step of way!

                </p>
                {/* <span className='absolute animate-bounce left-10 z-0 flex justify-center bg-c-blue rounded-full' style={{ height: '250px', width: '250px' }}></span> */}
                {/* <span className='absolute animate-bouncey right-10 z-0 flex justify-center bg-c-blue rounded-full' style={{ height: '200px', width: '200px' }}></span> */}
            </div>
        </section >
    );
};

export default About;