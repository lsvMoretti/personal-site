// components/Navbar.js
'use client';
import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const targetDiv = useRef(null);
    const handleScroll = () => {
        //console.log('Scroll Y: ' + window.scrollY);
        const top = window.scrollY >= 1000;
        setIsScrolled(top);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  const linkClass = isScrolled ? "text-picton-blue font-bold font-poppins" : "text-off-white font-bold font-poppins";

    return (
        <nav className="w-3/4 bg-transparent fixed top-0 z-50 pt-5 pb-5 transition-all duration-500 ease-in-out transform backdrop-blur">
            <div className='flex flex-row justify-around'>
                <a className={linkClass} href="#home">{'<home />'}</a>
                <a className={linkClass} href="#knowledge">{'<knowledge />'}</a>
                <a className={linkClass} href="#work">{'<work />'}</a>
            </div>
            <div id="targetDiv" ref={targetDiv}></div>
        </nav>
    );
};

export default Navbar;
