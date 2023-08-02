'use client'

import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

const TypedComponent = ({ string, className, loop = false }) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [string],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: loop,
    });

    return () => {
      typed.destroy();
    };
  }, [string]); // add string to dependency array so effect runs again if string changes

  return (
    <div className={className}>
      <span ref={el}></span>
    </div>
  );
};

export default TypedComponent;
