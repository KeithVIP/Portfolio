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
            description: 'Use this simple search that populates information on specific dog breeds and see if they will be a good fit for your family. After finding a breed that interests you, you can locate them in your local area! A one stop shop for finding your new dog to adopt. Thinking about getting a dog? Would rather adopt one than go to a dogon breeder? Well, now you can with Woofify!',
            website: 'https://keithvip.github.io/Woofify/',
            alt: 'woofify',
            technologies: 'JavaScript, HTML, CSS, JQuery, Restful Api, Bulma',
            image: WoofifyImg
        },
        {
            id: '2',
            name: 'Slayers',
            description: 'A group of nerds came together with one simple idea, create an online RPG portal that takes tabletop gaming to the next level. This web application allows a user to create a character, build basic statistics, and create or join a party through the use of simple input.',
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
                    <li key={id} className='flex flex-col justify-center items-center max-w-xs tablet:max-w-xl laptop:max-w-2xl desktop:max-w-4xl'>
                        <h2 className='font-Cutive font-black flex justify-end text-center text-7xl laptop:text-6xl desktop:text-7xl tablet:text-5-xl'>{name}</h2>
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
                            className='justify-center w-4/5 laptop:right-32 laptop:top-28'>
                            <p className='font-Cutive font-extrabold text-sm flex flex-wrap text-center bg-c-yellow rounded-lg p-3 laptop:max-w-xl max-h-fit'>
                                {description}
                            </p>
                            <div className='font-bold italic flex justify-center text-sm text-center'>
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