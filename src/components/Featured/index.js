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
            name: 'Slayers',
            description: 'A group of nerds came together with one simple idea, create an online RPG portal that takes tabletop gaming to the next level. This web application allows a user to create a character, build basic statistics, and create or join a party through the use of simple input.',
            website: 'https://fierce-temple-92608.herokuapp.com/',
            alt: 'slayers',
            technologies: 'JavaScript, HTML, CSS, Node.js, Express, MySql, Dotenv, Bcrypt, Jest. TailwindCSS',
            image: SlayersImg
        },
        {
            id: '2',
            name: 'Book Search Engine',
            description: 'Take a fully functioning Google Books API search engine built with a Restful API, and refactor it to be a GraphQL API built with Apollo Server.',
            website: 'https://calm-badlands-97625.herokuapp.com/',
            alt: 'googlebook',
            technologies: 'Mern, React, MongoDB, Node.js',
            image: GoogleBookImg
        },
        {
            id: '3',
            name: 'Woofify',
            description: 'Use this simple search that populates information on specific dog breeds and see if they will be a good fit for your family. After finding a breed that interests you, you can locate them in your local area! A one stop shop for finding your new dog to adopt. Thinking about getting a dog? Would rather adopt one than go to a dogon breeder? Well, now you can with Woofify!',
            website: 'https://keithvip.github.io/Woofify/',
            alt: 'woofify',
            technologies: 'JavaScript, HTML, CSS, JQuery, Restful Api, Bulma',
            image: WoofifyImg
        },
    ];

    return (
        <section id='featured'>
            <ul id='container' className='flex flex-col'>
                {projectData.map(({ id, name, description, website, alt, technologies, image }) => (
                    <li key={id} className='min-h-screen flex justify-center items-center'>
                        <a href={website} alt={alt} target='_blank'>
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
                                className='flex m-2 p-1 ring-c-black ring-4 rounded-3xl'
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
                            className='relative right-32 top-28'
                        >
                            <h2 className='font-Gwen flex justify-end text-7xl font-bold'>{name}</h2>
                            <p className='flex flex-wrap text-justify bg-c-yellow rounded-lg p-3 max-w-xl'>
                                {description}
                            </p>
                            <div className='flex justify-center'>
                                {technologies}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Featured;