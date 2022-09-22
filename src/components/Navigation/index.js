import React, { useState, useEffect } from 'react';
import Resume from '../Resume';

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
                            className="w-100 h-100 animate-icon"
                        />
                    </a>
                </div>
                <nav id='subcontainer' className='bg-c-yellow w-full'>
                    <ul className='flex justify-around'>
                        <li className="flex">
                            <span onClick={() => {
                                setAboutSelected(true)
                                setPortfolioSelected(false)
                                setResumeSelected(false)
                            }}
                                className="animate-fade1">About</span>
                        </li>
                        <li className="flex">
                            <span onClick={() => {
                                setAboutSelected(false)
                                setPortfolioSelected(true)
                                setResumeSelected(false)
                            }}
                                className="animate-fade2">Portfolio</span>
                        </li>
                        <li className="flex">
                            <span onClick={() => {
                                toggleResume(false)
                            }}
                                className="animate-fade3">Resume</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navigation;