import React from 'react';
import NavigationBar from '../NavigationBar';

const Header = () => {
    return (
        <header>
            <div id='navContainer' className='inline-flex'>
                <NavigationBar className='' />
                <a href='/'>Keith Yanosy</a>
            </div>
        </header>
    );
};

export default Header;