import { BackText } from "./BackText";
import { TextCapa } from "./TextCapa";
import { motion } from "framer-motion";
import { useState } from "react";
import { Contar } from "./functions/ShowText";
import { NavLink } from "react-router-dom";
import { Motion } from "../../functions/Motion";
import { pageWidth } from "../../../pages/util/page-width";

export function PhotoButtons() {
  const primeiroTexto: string = `Descobriu um easter egg!!`;
  const segundoTexto: string = `As figurinhas são personagens de Solo Leveling`;

  let [texts, setText] = useState(0);
  const textArray = [<TextCapa />, <BackText />];
  function click() {
    setText(texts == 0 ? (texts = 1) : (texts = 0));

    Contar(primeiroTexto, segundoTexto);

    // const text: any = document.querySelector("#texto");
    // text.innerHTML == ReactDOMServer.renderToString(<TextCapa />)
    //   ? (text.innerHTML = ReactDOMServer.renderToString(<BackText />))
    //   : (text.innerHTML = ReactDOMServer.renderToString(<TextCapa />));
  }

  return (
    <div className={"grid absolute" }>
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
        {Motion(0.7, 0.6,
          <div
            className=" ml-0
        n0:w-[230px] 
        n1:w-[230px] 
        n2:w-[230px]  
        n3:w-[600px]   
        n4:w-[600px]        
        n5:w-[600px]        
        n6:w-[500px]        
        n7:w-[280px]        
        ">
            <img
              onClick={click}
              className="bg-[#6d6d6d1f] opacity-100  rounded-[60px]  hover:bg-Bhover m-auto cursor-pointer brightness-100
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
              {Motion(0.6, 0.8,
                <NavLink
                  className="buttons
              "
                  to="https://www.linkedin.com/in/lucasvmarangoni/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="13" height="12" fill="white" fillOpacity="0.4" />
                    <path d="M16.5604 0H1.53803C0.717186 0 0 0.590625 0 1.40183V16.4575C0 17.2732 0.717186 18 1.53803 18H16.556C17.3812 18 18 17.2683 18 16.4575V1.40183C18.0048 0.590625 17.3812 0 16.5604 0ZM5.57959 15.0039H3.00093V6.98625H5.57959V15.0039ZM4.37946 5.76723H4.36097C3.53571 5.76723 3.00133 5.1529 3.00133 4.38388C3.00133 3.6008 3.54977 3.00094 4.39352 3.00094C5.23727 3.00094 5.75356 3.59638 5.77204 4.38388C5.77164 5.1529 5.23727 5.76723 4.37946 5.76723ZM15.0039 15.0039H12.4252V10.62C12.4252 9.56973 12.0499 8.85214 11.117 8.85214C10.4042 8.85214 9.98235 9.33429 9.79472 9.80397C9.7244 9.97272 9.70552 10.2025 9.70552 10.4372V15.0039H7.12686V6.98625H9.70552V8.10201C10.0808 7.56763 10.667 6.79862 12.0311 6.79862C13.7238 6.79862 15.0043 7.91438 15.0043 10.3199L15.0039 15.0039Z" fill="black" />
                  </svg>
                  <p>Linkedin</p>
                </NavLink>
              )}

              {Motion(0.6, 0.9,
                <NavLink
                  className="buttons
              "
                  to="https://github.com/Lucasvmarangoni"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="18" height="18" rx="2" fill="black" />
                    <path d="M9.05044 2.00043C5.15551 2.00043 2 5.10682 2 8.93529C2 12.0009 4.01995 14.5993 6.81942 15.516C7.17326 15.5815 7.30105 15.3669 7.30105 15.1814C7.30105 15.0167 7.29708 14.5811 7.29444 14.0029C5.33221 14.4208 4.91888 13.0706 4.91888 13.0706C4.59765 12.2714 4.13408 12.0568 4.13408 12.0568C3.49602 11.6282 4.18476 11.6373 4.18476 11.6373C4.89156 11.6845 5.26347 12.3503 5.26347 12.3503C5.89228 13.4113 6.91328 13.1044 7.31735 12.9259C7.37905 12.479 7.5628 12.1717 7.76285 12.0005C6.19766 11.8267 4.55182 11.2307 4.55182 8.57338C4.55182 7.81445 4.82502 7.19638 5.27669 6.71094C5.1987 6.53713 4.95986 5.83064 5.33882 4.87537C5.33882 4.87537 5.92886 4.69029 7.2777 5.58662C7.84217 5.43276 8.44146 5.35604 9.04031 5.35214C9.63959 5.35604 10.2384 5.43319 10.8029 5.58662C12.1438 4.69029 12.7334 4.87537 12.7334 4.87537C13.1119 5.83064 12.8731 6.5367 12.8044 6.71094C13.2516 7.19638 13.5248 7.81488 13.5248 8.57338C13.5248 11.2368 11.8768 11.8241 10.3098 11.9936C10.5548 12.2012 10.7844 12.6281 10.7844 13.2761C10.7844 14.2036 10.7756 14.9508 10.7756 15.1767C10.7756 15.357 10.899 15.5737 11.2621 15.5039C14.0823 14.5967 16.1 11.9962 16.1 8.93486C16.1 5.10638 12.9445 2 9.04956 2L9.05044 2.00043Z" fill="white" fillOpacity="0.4" />
                  </svg>




                  <p>Github</p>
                </NavLink>
              )}

              {Motion(0.6, 1.0,
                <NavLink
                  className="buttons
                n5:w24
              "
                  to="/curriculo-lucasvmarangoni.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="18" height="18" rx="2" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M15 15.0588V16.4706H3V15.0588H15ZM15 11.5294V12.9412H3V11.5294H15ZM15 8V9.41176H3V8H15Z" fill="white" fillOpacity="0.4" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.2661 1L7.96147 5.30466L5.73336 3.07656L5 3.80991L7.96147 6.7719L13 1.73388L12.2661 1Z" fill="white" fillOpacity="0.4" />
                  </svg>


                  <p>Currículo</p>
                </NavLink>
              )}
            </div>
          </div>
        )}

        {Motion(0.6, 1.0,
          <div
            id="texto"
            className="text-T2 text-xl font-medium text-justify pb-10 brightness-[2.2]
        n0:w-[540px] n0:text-xl
        n1:w-[450px] n1:text-xl
        n2:w-[400px] n2:text-base n2:pt-0
        n3:w-[460px] n3:text-sm n3:m-auto 
        n4:w-[430px] n4:text-xs n4:m-auto 
        n5:w-[350px] n5:text-xs n5:m-auto 
        n6:w-[300px] n6:text-xs n6:m-auto
        n7:w-[200px] n7:text-xs n7:m-auto"
          >
            {textArray[texts]}
            {/* <TextCapa /> */}
          </div>
        )}
      </div >
      <p
        id="sicret"
        className="text-T1 font-medium absolute top-[90%] brightness-[2.7]
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
    </div >
  );
}
