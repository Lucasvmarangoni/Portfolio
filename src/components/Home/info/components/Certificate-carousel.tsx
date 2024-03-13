import React, { useState, useEffect } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Link } from "react-router-dom";
import { Motion } from "../../../functions/Motion";

const images = [
  {
    src: '/fiapcloud.png',
    href: 'https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/79662/b2ad726dfb744ad7385137cfd0d8bb62/certificado.png',
    title: `<strong>FIAP - Cloud Fundamentals, Administration and Solution Architect (Mar, 2023)</strong>`,
    text: `Fundamentos da cloud, como nuvem pública, privada e híbrida, hypervisor, clusters, IaaS, PaaS e SaaS.`,
  },
  {
    src: '/gcp.png',
    href: 'https://www.cloudskillsboost.google/public_profiles/c3acdda3-a1c2-4841-b9c5-0cec83f7a31b',
    title: `<strong>Google Cloud Skills Boost - Google Cloud Foundations Academy (Mar, 2023)</strong>`,
    text: ` Infraestrutura, interfaces e recursos do GCP. Conquistei as 4 skill badges dos laboratórios práticos.`,
  },
  {
    src: '/paiva-certificate.png',
    href: 'https://youtu.be/vE4thVxtfiE?t=1283',
    title: `<strong>PUC Minas - Destaque do Eixo I (Mar, 2023 - Jun 2023)</strong>`,
    text: `Habilidades interpessoais desenvolvendo e planejando projeto em equipe. Nosso projeto foi destaque do Eixo I`,
  },
  {
    src: '/cyber.png',
    href: 'https://drive.google.com/drive/u/0/folders/1qsKGQ-pVSax_dOSbI2bR2uyUbnmC3LMl',
    title: `<strong>XP Educação - Analista de Defesa Cibernética (Jul, 2023 - Set, 2023)</strong>`,
    text: `Defesa em profundidade, legislação de cibersegurança e privacidade, redes de computadores, segurança de infra. cloud.`,
  },
  {
    src: '/solucoes.png',
    href: 'https://drive.google.com/drive/u/0/folders/1qsKGQ-pVSax_dOSbI2bR2uyUbnmC3LMl',
    title: `<strong>XP Educação - Arquiteto de soluções (Jul, 2023 - Set, 2023)</strong>`,
    text: `Computação em Nuvem, soluções de rede e cibersegurança, IoT, blockchain, banco de dados, IA e machine learning.`,
  },
  {
    src: '/estrutura-de-dados-e-algoritimos.png',
    href: 'https://www.udemy.com/certificate/UC-923351e1-3128-443b-9d39-b9b8da0337e5/',
    title: `<strong>Udemy - Estrutura de Dados e Algoritmos em Python</strong>`,
    text: `Big-O, vetores, busca binária, pilha, filas, deques, listas encadeadas, recursão, 
    algoritmos de ordenação, arvore binária e grafos.`,
  },
  {
    src: '',
    href: 'https://www.udemy.com/certificate/UC-876b7113-acab-4a5d-9e53-9d130842d287/',
    title: `<strong>Udemy - Banco de Dados: Da modelagem à SQL com PostgreSQL</strong>`,
    text: `Modelos de banco de dados, modelo conceitual, normalização, modelo lógico, SQL, PgAdmin`,
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

          {/* <img
              src={images[currentIndex].src}
              alt={`Slide ${currentIndex}`}
              className="w-32 rounded-3xl brightness-[0.35] hover:opacity-95 object-cover"
            /> */}


        </div>

        <Link to={images[currentIndex].href} target="_blank">

          <div className="m-auto">
            <p className="PP m-auto text-T1 brightness-[2.5] grid 
        n4:max-w-[40em] 
        n7:max-w-[40em] 
      " dangerouslySetInnerHTML={htmlTitle}>

            </p>

            <p className="PP m-auto text-T2 brightness-[2.5] grid 
        n4:max-w-[40em] 
        n7:max-w-[40em] 
      " dangerouslySetInnerHTML={htmlDescription}>

            </p>
          </div>

        </Link>
      </div>
      {
        Motion(2.0, 1.3,
          <button
            onClick={goToNextSlide}
            className={buttons + " n2:right-[-1em] n7:right-[-0.6em]"}
          >
            {<SlArrowRight />}
          </button>
        )
      }
    </div >
  );
};

export default CertificateCarousel;

