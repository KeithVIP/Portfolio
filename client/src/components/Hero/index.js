import React from 'react';
// import NavigationBar from '../NavigationBar';
// import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section id='hero' className="">
            {/* <div id='navContainer' className='inset-x-0 top-0 inline-flex'>
                <NavigationBar />
                <Link href='/'></Link>
            </div> */}
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