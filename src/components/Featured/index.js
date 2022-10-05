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
        <section id='featured' className='font-cutive'>
            <ul id='container' className='flex flex-col'>
                <li className='min-h-screen flex justify-center items-center ml-10'>
                    <a href="https://fierce-temple-92608.herokuapp.com/" alt="slayers" target="_blank">
                        <img
                            data-aos="fade-left"
                            data-aos-offset="0"
                            data-aos-easing="ease-out"
                            data-aos-delay=""
                            data-aos-anchor=""
                            data-aos-anchor-placement=""
                            dara-aos-once="false"
                            src={require('../../assets/thumbnails/slayers.gif')}
                            alt='Woofify'
                            className='flex p-1.5 ring-c-gray ring-8 rounded-3xl'
                        ></img>
                    </a>
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
                        <h2 className='flex justify-end text-7xl font-bold'>Slayers</h2>
                        <p className='flex flex-wrap text-justify bg-c-yellow rounded-lg p-3 max-w-xl'>
                            A web application that allows a user to create a character, build basic statistics, and create or join a party.
                        </p>
                        <div className='flex justify-center'>
                            JavaScript, HTML, CSS, Node.js, Express, MySql, Dotenv, Bcrypt, Jest. TailwindCSS
                        </div>
                    </div>
                </li>
                <li className='min-h-screen flex justify-center items-center ml-10'>
                    <a href="https://calm-badlands-97625.herokuapp.com/" alt="googlebook" target="_blank">
                        <img
                            data-aos="fade-left"
                            data-aos-offset="0"
                            data-aos-easing="ease-out"
                            data-aos-delay=""
                            data-aos-anchor=""
                            data-aos-anchor-placement=""
                            dara-aos-once="false"
                            src={require('../../assets/thumbnails/googlebook.gif')}
                            alt='Woofify'
                            className='flex p-1.5 ring-c-gray ring-8 rounded-3xl'
                        ></img>
                    </a>
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
                        <h2 className='flex justify-end text-7xl font-bold'>Book Search Engine</h2>
                        <p className='flex flex-wrap text-justify bg-c-yellow rounded-lg p-3 max-w-xl'>
                            Take a fully functioning Google Books API search engine built with a Restful API, and refactor it to be a GraphQL API built with Apollo Server.
                        </p>
                        <div className='flex justify-center'>
                            Mern, React, MongoDB, Node.js
                        </div>
                    </div>
                </li>
                <li className='min-h-screen flex justify-center items-center ml-10'>
                    <a href="https://keithvip.github.io/Woofify/" alt="woofify" target="_blank">
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
                            className='flex p-1.5 ring-c-gray ring-8 rounded-3xl'
                        ></img>
                    </a>
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
                            Use this simple search that populates information on specific dog breeds and see if they will be a good fit for your family. After finding a breed that interests you, you can locate them in your local area! A one stop shop for finding your new dog to adopt. Thinking about getting a dog?
                            Would rather adopt one than go to a dogon breeder?
                            Well, now you can with Woofify!
                        </p>
                        <div className='flex justify-center'>
                            JavaScript, HTML, CSS, JQuery, Restful Api's, Bulma
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    );
};

export default Featured;