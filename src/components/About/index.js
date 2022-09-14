import React from 'react';

function About() {
    return (
        <section id='about' className='min-h-screen bg-c-blue flex items-center'>
            <div id='container' className='w-full bg-c-black text-c-white leading-loose flex flex-col items-center'>
                <h1 className='font-Meddon text-[72px]'>Keith Yanosy</h1>
                <p className="font-Nanum text-[20px] text-justify max-w-sm md:max-w-md lg:max-w-lg">
                    As a self-motivated software developer, I am searching for a reliable
                    company that can provide a safe learning environment with the potential to establish my career
                    in
                    software development.
                </p>
                <p className="font-Nanum text-[48px] font-semibold">
                    AVAILABLE FOR HIRE
                </p>
            </div>
        </section>
    );
};

export default About;