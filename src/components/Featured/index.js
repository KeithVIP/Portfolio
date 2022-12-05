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
            github: 'https://github.com/KeithVIP/Woofify',
            alt: 'woofify',
            technologies: 'JavaScript, HTML, CSS, JQuery, Restful Api, Bulma',
            image: WoofifyImg
        },
        {
            id: '2',
            name: 'Slayers',
            description: 'This web application allows a user to create a character, build basic statistics, and create or join a party through the use of simple input.',
            website: 'https://fierce-temple-92608.herokuapp.com/',
            github: 'https://github.com/VMLujanJr/mini-factory',
            alt: 'slayers',
            technologies: 'JavaScript, HTML, CSS, Node.js, Express, MySql, Dotenv, Bcrypt, Jest. TailwindCSS',
            image: SlayersImg
        },
        {
            id: '3',
            name: 'Book Search Engine',
            description: 'Take a fully functioning Google Books API search engine built with a Restful API, and refactor it to be a GraphQL API built with Apollo Server.',
            website: 'https://book-search-engine-keithvip.vercel.app/',
            github: 'https://github.com/KeithVIP/Book-Search-Engine',
            alt: 'googlebook',
            technologies: 'Mern, React, MongoDB, Node.js',
            image: GoogleBookImg
        },
    ];

    return (
        <section id='featured' className='bg-paper'>
            <ul id='container' className='customViewHeight flex flex-col items-center divide-y-2 divide-c-gray p-6'>
                {projectData.map(({ id, name, description, website, github, alt, technologies, image }) => (
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
                                    className='flex my-2 p-1 ring-c-black hover:ring-c-blue ring-4 rounded-3xl'
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
                                <div className='relative'>
                                    <p className='font-Josefin font-black text-sm laptop:text-lg desktop:text-xl tablet:text-md text-c-white bg-c-gray drop-shadow-shade flex flex-wrap text-justify rounded-lg p-3 laptop:max-w-xl desktop:max-w-2xl'>
                                        {description}
                                    </p>
                                    <a href={github} alt='github link' target='_blank' rel='noreferrer' className='absolute -bottom-2 -right-2 bg-c-blue rounded-md p-1 font-bold hover:text-c-white active:text-c-blue drop-shadow-shade'>Github</a>
                                </div>
                                <div className='text-center font-Nanum text-c-black drop-shadow-4xl backdrop-blur-4 font-bold italic text-sm flex justify-center laptop:text-lg desktop:text-xl tablet:text-md p-2'>
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