import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface TypedComponentProps {
  string: string;
  className: string;
  loop?: boolean;
}

const TypedComponent: React.FC<TypedComponentProps> = ({ string, className, loop = false }) => {
  const el = useRef<HTMLSpanElement>(null);

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
  }, [string, loop]);

  return (
    <div className={className}>
      <span ref={el}></span>
    </div>
  );
};

export default TypedComponent;
