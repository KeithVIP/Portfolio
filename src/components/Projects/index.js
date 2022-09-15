import React from 'react';

const Projects = () => {
    return (
        <section id="featured" className="bg-c-yellow p-2">
            <ul id="container" className="bg-c-black text-c-black flex flex-col justify-center items-center min-h-screen space-y-60">
                <li id="subcontainer" className='bg-c-blue p-2'>
                    <div id='project' className='bg-c-yellow relative'>
                        <a href="">
                            <img
                                src={require(`../../assets/thumbnails/Woofify.gif`)}
                                alt="currex" class="w-100 h-100 hover:bg-c-transparent-black"
                            />
                            <section class="absolute bg-c-transparent-black text-c-black top-0 left-0 w-full h-full flex flex-col justify-center items-center opacity-0 hover:opacity-100 translate-y-20 hover:translate-y-0 duration-[2000ms]">
                                <h4 class="text-2xl">Slayers</h4>
                                <p class="text-2xl">
                                    HTML / CSS / JavaScript / Express.js
                                </p>
                            </section>
                        </a>
                    </div>
                </li>
                <li id="subcontainer" className='bg-c-blue p-2'>
                    <div id='project' className='bg-c-yellow relative'>
                        <a href="">
                            <img
                                src={require(`../../assets/thumbnails/Woofify.gif`)}
                                alt="currex" class="w-100 h-100 hover:bg-c-transparent-black"
                            />
                            <section class="absolute bg-c-transparent-black text-c-black top-0 left-0 w-full h-full flex flex-col justify-center items-center opacity-0 hover:opacity-100 translate-y-20 hover:translate-y-0 duration-[2000ms]">
                                <h4 class="text-2xl">Slayers</h4>
                                <p class="text-2xl">
                                    HTML / CSS / JavaScript / Express.js
                                </p>
                            </section>
                        </a>
                    </div>
                </li>
                <li id="subcontainer" className='bg-c-blue p-2'>
                    <div id="project" className='bg-c-yellow'>
                        Project 3
                    </div>
                </li>
            </ul>
        </section>
    );
};

export default Projects;