import React, { useState, useEffect } from 'react';
import Resume from '../Resume';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Navigation = (props) => {
    useEffect(() => {
        AOS.init({
            duration: 1200
        });
    }, []);
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
        <header id='Navigation' className="transition-opacity ease-in duration-8000 opacity-100">
            {isResumeOpen && (
                <Resume
                    onClose={toggleResume}
                ></Resume>
            )}
            <div id='container' className='League flex '>
                <div id='subcontainer'
                    data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-sine"
                    data-aos-delay=""
                    data-aos-anchor=""
                    data-aos-anchor-placement=""
                    dara-aos-once="">
                    <a href='/'>
                        <img
                            src={require(`../../assets/images/logo3.png`)}
                            alt="logo"
                            className="w-100 h-100"
                        />
                    </a>
                </div>
                <nav id='subcontainer'>
                    <ul className='flex'>
                        <li>
                            <span onClick={() => {
                                setAboutSelected(true)
                                setPortfolioSelected(false)
                                setResumeSelected(false)
                            }}>About</span>
                        </li>
                        <li>
                            <span onClick={() => {
                                setAboutSelected(false)
                                setPortfolioSelected(true)
                                setResumeSelected(false)
                            }}>Portfolio</span>
                        </li>
                        <li>
                            <span onClick={() => {
                                toggleResume(false)
                            }}>Resume</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navigation;