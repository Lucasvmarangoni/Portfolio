import ReactDOMServer from "react-dom/server";
import { BackText } from "./BackText";
import { TextCapa } from "./TextCapa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Contar } from "./functions/ShowText";

export function PhotoButtons() {
  const primeiroTexto: any = `Você descobriu um segredo!`;
  const segundoTexto: string = `Pretendo me especializar em Cibersegurança.`;
  let [texts, setText]: any = useState(0);
  const objectTexts: any = [<TextCapa />, <BackText />];
  function click() {
    setText(texts == 0 ? (texts = 1) : (texts = 0));

    Contar(primeiroTexto, segundoTexto);

    // const text: any = document.querySelector("#texto");
    // text.innerHTML == ReactDOMServer.renderToString(<TextCapa />)
    //   ? (text.innerHTML = ReactDOMServer.renderToString(<BackText />))
    //   : (text.innerHTML = ReactDOMServer.renderToString(<TextCapa />));
  }

  return (
    <div className="grid absolute">
      <div
        className="m-auto flex justify-center items-center 
        n0:flex n0:gap-0
        n1:flex n1:gap-0
        n2:flex n2:gap-0 n2:mt-0
        n3:grid n3:gap-4 n3:mt-8
        n4:grid n4:gap-8 n4:mt-8
        n5:grid n5:gap-8 n5:mt-8
        n6:grid n6:gap-6 n6:mt-8
        n7:grid n7:gap-2 n7:mt-8
      "
      >
        <motion.div
          className=" ml-0
        n0:w-[230px] 
        n1:w-[230px] 
        n2:w-[230px]  
        n3:w-[600px]   
        n4:w-[600px]        
        n5:w-[600px]        
        n6:w-[500px]        
        n7:w-[280px]        
        "
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.6,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <img
            onClick={click}
            className="bg-[#6d6d6d10] opacity-90  rounded-[60px]  hover:bg-Bhover m-auto cursor-pointer
            n0:w-[211px]   
            n1:w-[180px]    
            n2:w-[160px]
            n3:w-[160px] 
            n4:w-[120px]
            n5:w-[120px]
            n6:w-[120px]
            n7:w-[80px]"
            src="/foto-perfil.png"
            alt="Foto do perfil"
          />

          <div
            className="mt-1 flex justify-center gap-1
            n0:flex-wrap
            n1:flex-wrap
            n2:flex-wrap
            n3:flex-wrap 
            n4:flex-wrap
            n5:flex-wrap
            n6:flex-wrap
            n7:flex-wrap
          "
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.9,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <a
                className="buttons
              "
                href="https://www.linkedin.com/in/lucas-v-marangoni/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="
                  n0:w-5
                  n1:w-5
                  n2:w-4
                  n3:w-4
                  n4:w-3
                  n5:w-3
                  n6:w-3
                  n7:w-3
                  "
                  src="/linkedin.png"
                  alt="linkedin"
                />
                <p>Linkedin</p>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.9,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <a
                className="buttons
              "
                href="https://github.com/Lucasvmarangoni"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="             
                n0:w-5
                n1:w-5
                n2:w-4
                n3:w-4
                n4:w-3
                n5:w-3
                n6:w-3
                n7:w-3"
                  src="/github.png"
                  alt="github"
                />
                <p>Github</p>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.9,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <a
                className="buttons
                n5:w24
              "
                href="/Curriculo.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="
              n0:w-5
              n1:w-5
              n2:w-4
              n3:w-4
              n4:w-3
              n5:w-3
              n6:w-3
              n7:w-3"
                  src="/CV.png"
                  alt="curriculo"
                />
                <p>Currículo</p>
              </a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          id="texto"
          className="text-T2 text-xl font-medium text-justify pb-10
        n0:w-[540px] n0:text-xl
        n1:w-[450px] n1:text-xl
        n2:w-[400px] n2:text-base n2:pt-0
        n3:w-[460px] n3:text-sm n3:m-auto 
        n4:w-[430px] n4:text-xs n4:m-auto 
        n5:w-[350px] n5:text-xs n5:m-auto 
        n6:w-[300px] n6:text-xs n6:m-auto
        n7:w-[200px] n7:text-xs n7:m-auto"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 1.0,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          {objectTexts[texts]}
          {/* <TextCapa /> */}
        </motion.div>
      </div>
      <p
        id="sicret"
        className="text-T1 font-medium absolute top-[90%]
      n0:text-xl
      n1:text-xl
      n2:text-base
      n3:text-sm
      n4:text-xs
      n5:text-xs
      n6:text-xs
      n7:text-xs
      "
      ></p>
    </div>
  );
}
