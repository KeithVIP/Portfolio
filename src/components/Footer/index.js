import React from 'react';
import GitHubLogo from '../../assets/logos/github.svg';
import LinkedIn from '../../assets/logos/linkedin.svg';
import EmailLogo from '../../assets/logos/email.svg';

const Footer = () => {
    return (
        <footer className='sticky bottom-0 z-20'>
            <ul className="flex flex-col items-start space-y-5 p-2">
                <li>
                    <a href="https://www.linkedin.com/in/keith-yanosy-8b174753/" target='_blank'>
                        <img
                            src={LinkedIn}
                            alt="linkedin logo"
                            className="hover:scale-110 w-[35px] h-[35px]">
                        </img>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/KeithVIP" target='_blank'>
                        <img
                            src={GitHubLogo}
                            alt="github logo"
                            className="hover:scale-110 w-[35px] h-[35px]">
                        </img>
                    </a>
                </li>
                <li>
                    <a href="mailto:KeithVIP@gmail.com" target='_blank'>
                        <img
                            src={EmailLogo}
                            alt="email logo"
                            className="hover:scale-110 w-[35px] h-[35px]">
                        </img>
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;