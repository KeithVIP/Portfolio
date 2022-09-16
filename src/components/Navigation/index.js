import React from 'react';

const Navigation = (props) => {
    const {
        aboutSelected,
        setAboutSelected,
        portfolioSelected,
        setPortfolioSelected,
        resumeSelected,
        setResumeSelected,
    } = props;

    return (
        <header id='Navigation'>
            <div id='container' className='League flex pl-10'>
                <a href='/'>
                    <img
                        src={require('../../assets/images/logo3.png')}
                        alt="logo"
                        className=""
                    />
                </a>
            </div>
            <nav className="font-Josefin font-bold text-[20px] flex basis-3/4 justify-around items-center">
                <ul className="flex basis-1/3">
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
                            setAboutSelected(false)
                            setPortfolioSelected(false)
                            setResumeSelected(true)
                        }}>Resume</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;