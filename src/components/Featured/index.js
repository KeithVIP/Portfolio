import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Featured = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200
        });
    }, []);

    return (
        <section id='featured' className='League min-h-screen overflow-visible'>
            <ul id='container' className='bg-c-yellow flex flex-col space-y-48'>
                <li className='bg-c-blue min-h-screen flex justify-center items-center'>
                    <img
                        data-aos="fade-left"
                        data-aos-offset="0"
                        data-aos-easing="ease-out"
                        data-aos-delay=""
                        data-aos-anchor=""
                        data-aos-anchor-placement=""
                        dara-aos-once="false"
                        src={require('../../assets/thumbnails/Woofify2.gif')}
                        alt='Woofify'
                        className='flex p-10'
                    ></img>
                    <div
                        data-aos="fade-up"
                        data-aos-offset=""
                        data-aos-duration="2000"
                        data-aos-easing="ease-out"
                        data-aos-delay=""
                        data-aos-anchor=""
                        data-aos-anchor-placement="top-bottom"
                        dara-aos-once="false"
                        className='relative right-32 top-28'>
                        <h2 className='flex justify-end text-7xl font-bold'>Woofify</h2>
                        <p className='flex flex-wrap text-justify bg-c-yellow rounded-lg p-3 max-w-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laboriosam, ad facere assumenda dolorum voluptates facilis illo, minima quisquam cupiditate ipsum nemo! Explicabo eos, id quod ea corporis quisquam asperiores!
                        </p>
                        <div className='flex justify-center'>
                            JavaScript, HTML, CSS
                        </div>
                    </div>
                </li>
                <li className='bg-c-blue min-h-screen flex justify-center items-center'>
                    <img
                        data-aos="fade-left"
                        data-aos-offset="0"
                        data-aos-easing="ease-out"
                        data-aos-delay=""
                        data-aos-anchor=""
                        data-aos-anchor-placement=""
                        dara-aos-once="false"
                        src={require('../../assets/thumbnails/Woofify.gif')}
                        alt='Woofify'
                        className='flex p-10'
                    ></img>
                    <div
                        data-aos="fade-up"
                        data-aos-offset=""
                        data-aos-duration="2000"
                        data-aos-easing="ease-out"
                        data-aos-delay=""
                        data-aos-anchor=""
                        data-aos-anchor-placement="top-bottom"
                        dara-aos-once="false"
                        className='relative right-32 top-28'>
                        <h2 className='flex justify-end text-7xl font-bold'>Woofify</h2>
                        <p className='flex flex-wrap text-justify bg-c-yellow rounded-lg p-3 max-w-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laboriosam, ad facere assumenda dolorum voluptates facilis illo, minima quisquam cupiditate ipsum nemo! Explicabo eos, id quod ea corporis quisquam asperiores!
                        </p>
                        <div className='flex justify-center'>
                            JavaScript, HTML, CSS
                        </div>
                    </div>
                </li>
                <li className='bg-c-blue min-h-screen flex justify-center items-center'>
                    <img
                        data-aos="fade-left"
                        data-aos-offset="0"
                        data-aos-easing="ease-out"
                        data-aos-delay=""
                        data-aos-anchor=""
                        data-aos-anchor-placement=""
                        dara-aos-once="false"
                        src={require('../../assets/thumbnails/Woofify2.gif')}
                        alt='Woofify'
                        className='flex p-10'
                    ></img>
                    <div
                        data-aos="fade-up"
                        data-aos-offset=""
                        data-aos-duration="2000"
                        data-aos-easing="ease-out"
                        data-aos-delay=""
                        data-aos-anchor=""
                        data-aos-anchor-placement="top-bottom"
                        dara-aos-once="false"
                        className='relative right-32 top-28'>
                        <h2 className='flex justify-end text-7xl font-bold'>Woofify</h2>
                        <p className='flex flex-wrap text-justify bg-c-yellow rounded-lg p-3 max-w-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laboriosam, ad facere assumenda dolorum voluptates facilis illo, minima quisquam cupiditate ipsum nemo! Explicabo eos, id quod ea corporis quisquam asperiores!
                        </p>
                        <div className='flex justify-center'>
                            JavaScript, HTML, CSS
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    );
};

export default Featured;