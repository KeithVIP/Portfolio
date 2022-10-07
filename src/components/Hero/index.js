import React from 'react';

const Hero = () => {
    return (
        <section id='hero' className="bg-vintage">
            <div className='flex w-full justify-center items-center align-top animate-slider1 px-2'>
                <img
                    src={require(`../../assets/images/logo2.png`)}
                    alt="hero"
                    className="w-100 h-100 animate-slider1 w-[350px] laptop:w-[450px]"
                />
            </div>
        </section>
    )
};

export default Hero;