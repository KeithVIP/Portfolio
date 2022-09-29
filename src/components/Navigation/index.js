import React, { useState, useEffect } from 'react';
import Resume from '../Resume';
import { Bars3Icon } from '@heroicons/react/24/solid';

const Navigation = (props) => {
    const {
        aboutSelected,
        setAboutSelected,
        portfolioSelected,
        setPortfolioSelected,
        resumeSelected,
        setResumeSelected
    } = props;
    const [isResumeOpen, setIsResumeOpen] = useState(false);
    const toggleResume = (resume) => {
        setIsResumeOpen(!isResumeOpen);
    };


    return (
        <header id='Navigation'>
            {isResumeOpen && (
                <Resume
                    onClose={toggleResume} />
            )}
            <div id='container' className='League flex items-center'>
                <div id='subcontainer'>
                    <a href='/'>
                        <img
                            src={require(`../../assets/images/logo3.png`)}
                            alt="logo"
                            className="w-100 h-100 animate-slider1"
                        />
                    </a>
                </div>
                <nav id='menu' className='bg-c-yellow w-full font-League font-bold text-5xl'>
                    <Bars3Icon className='w-14 h-14 hover:text-c-red active:text-' />
                    <ul className='flex justify-around'>
                        <li className='flex focus:bg-c-blue'>
                            <button
                                type="button"
                                onClick={() => {
                                    setAboutSelected(true)
                                    setPortfolioSelected(false)
                                    setResumeSelected(false)
                                }}
                                className="animate-fade1 hover:text-c-blue active:text-c-white font-bold cursor-pointer">About</button>
                        </li>
                        <li className="flex">
                            <button
                                type="button"
                                onClick={() => {
                                    setAboutSelected(false)
                                    setPortfolioSelected(true)
                                    setResumeSelected(false)
                                }}
                                className="animate-fade2 hover:text-c-blue active:text-c-white font-bold cursor-pointer">Portfolio</button>
                        </li>
                        <li className="flex">
                            <button
                                type="button"
                                onClick={() => {
                                    toggleResume(false)
                                }}
                                className="animate-fade3 hover:text-c-blue active:text-c-white font-bold cursor-pointer">Resume</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navigation;