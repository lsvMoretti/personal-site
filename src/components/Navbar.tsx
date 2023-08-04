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
        <nav className="sm:w-3/4 bg-transparent fixed top-0 z-50 sm:py-5 py-10 transition-all duration-500 ease-in-out transform backdrop-blur w-full">
            <div className='flex flex-col sm:flex-row justify-center sm:justify-around items-center gap-5'>
                <a className={linkClass} href="#home">{'<home />'}</a>
                <a className={linkClass} href="#knowledge">{'<knowledge />'}</a>
                <a className={linkClass} href="#work">{'<work />'}</a>
            </div>
            <div id="targetDiv" ref={targetDiv}></div>
        </nav>
    );
};

export default Navbar;
