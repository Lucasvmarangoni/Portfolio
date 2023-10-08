import React, { useState, useEffect } from 'react';
import { HiOutlineChevronDoubleDown } from 'react-icons/hi';

const BlinkingIcon: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 1500); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative grid justify-center 
    n5:top-28            
    n7:top-14   
    ">
      <HiOutlineChevronDoubleDown className={`w-8 h-8 text-T1 brightness-200 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
    </div>
  );
};

export default BlinkingIcon;
