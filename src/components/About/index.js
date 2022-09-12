import React from 'react';

function About() {
    return (
        <section id='about' className='min-h-screen bg-c-blue flex items-center'>
            <div id='container' className='w-full bg-c-black text-c-white leading-loose align-middle flex flex-col items-center'>
                <h1 className="font-Aboreto text-[72px]">Keith Yanosy</h1>
                <p class="font-Nanum text-[20px] text-jusitify p-10 w-3/5 max-w-xs md:max-w-md">
                    As a self-motivated software developer, I am searching for a reliable
                    company that can provide a safe learning environment with the potential to establish my career
                    in
                    software development.
                </p>
                <p class="font-Aboreto text-[20px] font-semibold">
                    available for hire
                </p>
            </div>
        </section>
    );
};

export default About;