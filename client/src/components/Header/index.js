import React from 'react';
import NavigationBar from '../NavigationBar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div id='navContainer' className='w-screen inline-flex items-center'>
                <NavigationBar />
                <Link href='/'></Link>
            </div>
        </header>
    );
};

export default Header;