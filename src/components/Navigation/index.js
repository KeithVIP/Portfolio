import React from 'react';

function Navigation() {
    return (
        <section>
            <nav className="font-Josefin font-bold text-[20px] flex basis-3/4 justify-around items-center">
                <div>
                    <a href='/'>
                        <img src='/'
                            alt="" />
                    </a>
                </div>
                <a href="#about">
                    <span>About</span>
                </a>
                <a href="#portfolio">
                    <span>Portfolio</span>
                </a>
                <a href="#resume">
                    <span>Resume</span>
                </a>
            </nav>
        </section >
    );
};

export default Navigation;