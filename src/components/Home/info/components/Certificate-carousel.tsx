import React, { useState, useEffect } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Link } from "react-router-dom";
import { Motion } from "../../../functions/Motion";

const images = [
  {
    src: '/fiapcloud.png',
    href: 'https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/79662/b2ad726dfb744ad7385137cfd0d8bb62/certificado.png',
    title: `<strong>FIAP - Cloud Fundamentals, Administration and Solution Architect (Mar, 2023):</strong>`,
    text: `Funcionamento da web, vulnerabilidades e como explorá-las, além de praticar nos laboratórios e comunidade.`,
  },
  {
    src: '/gcp.png',
    href: 'https://www.cloudskillsboost.google/public_profiles/c3acdda3-a1c2-4841-b9c5-0cec83f7a31b',
    title: `<strong>Google Cloud Skills Boost - Google Cloud Foundations Academy (Mar, 2023):</strong>`,
    text: ` Infraestrutura, interfaces e recursos do GCP. Conquistei as 4 skill badges dos laboratórios práticos.`,
  },
  {
    src: '/paiva-certificate.png',
    href: 'https://youtu.be/vE4thVxtfiE?t=1283',
    title: `<strong>PUC Minas - Destaque do Eixo I (Mar, 2023 - Jun 2023):</strong>`,
    text: `Habilidades interpessoais desenvolvendo e planejando projeto em equipe. Nosso projeto foi destaque do Eixo I`,
  },
  {
    src: '/cyber.png',
    href: 'https://drive.google.com/drive/u/0/folders/1qsKGQ-pVSax_dOSbI2bR2uyUbnmC3LMl',
    title: `<strong>XP Educação - Analista de Defesa Cibernética (Jul, 2023 - Set, 2023):</strong>`,
    text: `Defesa em profundidade, legislação de cibersegurança e privacidade, redes de computadores, segurança de infra. cloud.`,
  },
  {
    src: '/solucoes.png',
    href: 'https://drive.google.com/drive/u/0/folders/1qsKGQ-pVSax_dOSbI2bR2uyUbnmC3LMl',
    title: `<strong>XP Educação - Arquiteto de soluções (Jul, 2023 - Set, 2023):</strong>`,
    text: `Computação em Nuvem, soluções de rede e cibersegurança, IoT, blockchain, banco de dados, IA e machine learning.`,
  },
  {
    src: '/direito.png',
    href: '#',
    title: `<strong>Estácio de Sá - Direito (Fev, 2016 - Jul, 2022):</strong>`,
    text: `O normal de curso superior, só me atrapalhou. Contudo, pude desenvolver minhas habilidades de estudo 
    enquanto me preparava para o exame XXXII da OAB em 2021.`,
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


  const buttons = "absolute top-1/2 transform -translate-y-1/2 text-[5em] font-semibold hover:text-[5.2em] text-T1 brightness-[2.5] n2:pb-0 n7:pb-28"

  const htmlDescription = {
    __html: images[currentIndex].text
  }
  const htmlTitle = {
    __html: images[currentIndex].title
  }

  return (
    <div className=" relative 
    
    ">

      {Motion(2.0, 1.3,
        <button
          onClick={goToPreviousSlide}
          className={buttons + " n2:left-[-1em] n7:left-[-0.6em]"}
        >
          {<SlArrowLeft />}
        </button>
      )}

      <div className=" gap-5
      n2:flex
      n7:grid
      ">
        <div className="m-auto 
    n4:max-w-[20em] 
    n7:max-w-[14em]
    ">
          <Link to={images[currentIndex].href} target="_blank">
            <img
              src={images[currentIndex].src}
              alt={`Slide ${currentIndex}`}
              className="w-full rounded-3xl brightness-[0.35] hover:opacity-95 object-cover"
            />
          </Link>

        </div>

        <div className="m-auto">
          <p className="PP m-auto text-T1 brightness-[2.5] grid 
        n4:max-w-[23em] 
        n7:max-w-[23em] 
      " dangerouslySetInnerHTML={htmlTitle}>

          </p>

          <p className="PP m-auto text-T2 brightness-[2.5] grid 
        n4:max-w-[23em] 
        n7:max-w-[23em] 
      " dangerouslySetInnerHTML={htmlDescription}>

          </p>
        </div>
      </div>
      {Motion(2.0, 1.3,
        <button
          onClick={goToNextSlide}
          className={buttons + " n2:right-[-1em] n7:right-[-0.6em]"}
        >
          {<SlArrowRight />}
        </button>
      )}
    </div>
  );
};

export default CertificateCarousel;

