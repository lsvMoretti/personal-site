import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface TypedComponentProps {
  strings: string[]; // Change to accept an array of strings
  className?: string;
  loop?: boolean;
  startDelay?: number; // Make startDelay optional
  backDelay?: number;
  loopCount?: number;
  shuffle?:boolean;
}

let TypedComponent: React.FC<TypedComponentProps> = ({ strings, className = '', loop = false, startDelay = 500, backDelay = 100, loopCount = Infinity, shuffle = false }) => {
  let el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    console.log('backdelay set to: ' + backDelay);
    let typed = new Typed(el.current, {
      strings: strings,
      startDelay: startDelay,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: backDelay,
      loop: loop,
      loopCount: loopCount,
      shuffle: shuffle,
    });

    return () => {
      typed.destroy();
    };
  }, [strings, loop, startDelay, backDelay, loopCount, shuffle]);

  return (
    <div className={className}>
      <span ref={el}></span>
    </div>
  );
};

export default TypedComponent;
