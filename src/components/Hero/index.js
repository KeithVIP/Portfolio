import React from 'react';

const Hero = () => {
    return (
        <section id='hero' className="bg-vintage">
            <div className='flex flex-col w-full justify-start items-center align-top animate-slider1'>
                <img
                    src={require(`../../assets/images/logo2.png`)}
                    alt="hero"
                    className="w-100 h-100 animate-slider1 flex justify-start"
                    style={{ height: '450px', width: '450px' }}
                />
            </div>
        </section>
    )
};

export default Hero;