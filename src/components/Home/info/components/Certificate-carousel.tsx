import React, { useState, useEffect } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Link } from "react-router-dom";

const images = [
  {
    src: '/fiapcloud.png',
    href: 'https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/79662/b2ad726dfb744ad7385137cfd0d8bb62/certificado.png',
  },
  {
    src: '/gcp.png',
    href: 'https://www.cloudskillsboost.google/public_profiles/c3acdda3-a1c2-4841-b9c5-0cec83f7a31b',
  },
];

const CertificateCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      goToNextSlide();
    }, 7000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const buttons = "absolute top-1/2 transform -translate-y-1/2 text-[2em] font-semibold hover:text-[2.2em]"

  return (
    <div className="relative max-w-[28rem]">
      {
        windowWidth >= 950 
        ? null
        : <p className="text-T1 text-2xl font-semibold brightness-200 text-center mb-4">Certificados </p>
      }
      <Link to={images[currentIndex].href} target="_blank">
        <img
          src={images[currentIndex].src}
          alt={`Slide ${currentIndex}`}
          className="w-full h-auto rounded-3xl brightness-50 hover:opacity-95"
        />
      </Link>
      <button
        onClick={goToPreviousSlide}
        className={buttons + " left-1"}
      >
        {<SlArrowLeft />}
      </button>
      <button
        onClick={goToNextSlide}
        className={buttons + " right-1"}
      >
        {<SlArrowRight />}
      </button>
    </div>
  );
};

export default CertificateCarousel;
