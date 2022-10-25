import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SlayersImg from '../../assets/thumbnails/slayers.gif';
import GoogleBookImg from '../../assets/thumbnails/googlebook.gif';
import WoofifyImg from '../../assets/thumbnails/Woofify.gif';

const Featured = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200
        });
    }, []);

    const projectData = [
        {
            id: '1',
            name: 'Woofify',
            description: 'Thinking about getting a dog? Would you rather adopt one than go to a dog breeder? Well, now you can with Woofify!',
            website: 'https://keithvip.github.io/Woofify/',
            alt: 'woofify',
            technologies: 'JavaScript, HTML, CSS, JQuery, Restful Api, Bulma',
            image: WoofifyImg
        },
        {
            id: '2',
            name: 'Slayers',
            description: 'This web application allows a user to create a character, build basic statistics, and create or join a party through the use of simple input.',
            website: 'https://fierce-temple-92608.herokuapp.com/',
            alt: 'slayers',
            technologies: 'JavaScript, HTML, CSS, Node.js, Express, MySql, Dotenv, Bcrypt, Jest. TailwindCSS',
            image: SlayersImg
        },
        {
            id: '3',
            name: 'Book Search Engine',
            description: 'Take a fully functioning Google Books API search engine built with a Restful API, and refactor it to be a GraphQL API built with Apollo Server.',
            website: 'https://calm-badlands-97625.herokuapp.com/',
            alt: 'googlebook',
            technologies: 'Mern, React, MongoDB, Node.js',
            image: GoogleBookImg
        },
    ];

    return (
        <section id='featured' className='bg-paper'>
            <ul id='container' className='customViewHeight flex flex-col items-center'>
                {projectData.map(({ id, name, description, website, alt, technologies, image }) => (
                    <li key={id} className='flex flex-col justify-center items-center mobile:max-w-xs tablet:max-w-md laptop:max-w-xl desktop:max-w-2xl'>
                        <h2 className='font-black font-Cutive flex text-4xl tablet:text-5xl laptop:text-6xl desktop:text-7xl text-center'>{name}</h2>
                        <div className="laptop:relative flex flex-col justify-center items-center">
                            <a href={website} alt={alt} target='_blank' rel='noreferrer'>
                                <img
                                    data-aos='zoom-in'
                                    data-aos-offset='0'
                                    data-aos-duration='2000'
                                    data-aos-easing='ease-out'
                                    data-aos-delay=''
                                    data-aos-anchor=''
                                    data-aos-achor-placement='top-bottom'
                                    data-aos-once='false'
                                    src={image}
                                    alt={alt}
                                    className='flex my-2 p-1 ring-c-black ring-4 rounded-3xl'
                                ></img>
                            </a>
                            <div
                                data-aos='fade-left'
                                data-aos-offset=''
                                data-aos-duration='2000'
                                data-aos-easing='ease-out'
                                data-aos-delay=''
                                data-aos-anchor=''
                                data-aos-achor-placement='top-bottom'
                                data-aos-once='false'
                                className='laptop:absolute laptop:-bottom-24 laptop:-left-10'
                            >
                                <p className='font-Cutive font-bold text-sm laptop:text-lg desktop:text-xl tablet:text-md text-c-white bg-c-gray drop-shadow-4xl flex flex-wrap text-justify rounded-lg p-3 laptop:max-w-xl desktop:max-w-2xl'>
                                    {description}
                                </p>
                                <div className='font-Nanum text-c-black drop-shadow-4xl backdrop-blur-none font-bold italic text-sm flex justify-center laptop:text-lg desktop:text-xl tablet:text-md'>
                                    {technologies}
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Featured;