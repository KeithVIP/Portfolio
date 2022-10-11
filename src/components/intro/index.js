import React, { useEffect } from 'react';

const Intro = () => {
    return (
        <div className='min-h-screen bg-c-black text-c-white flex justify-center items-center px:2'>
            <img
                src={require(`../../assets/images/logo.gif`)}
                alt="logo" />
        </div>
    );
};

export default Intro;