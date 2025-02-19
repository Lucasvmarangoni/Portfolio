import { Motion, MotionFirst } from "../functions/Motion";
import { ButtonPort } from "./info/components/ButtonPort";
import CertificateCarousel from "./info/components/Certificate-carousel";
import { First } from "./info/First";
import { Now } from "./info/components/Now";
import { Education } from "./info/Education";
import { Third } from "./info/Third";
import { pageWidth } from "../../pages/util/page-width";
import { InfoHeader } from "./info/info-header";
import BlinkingIcon from "./info/components/BlinkingIcon";
import { Algorithm } from "./info/components/Algorithm";
import { useState, useEffect } from "react";
import { Conhecimentos } from "./info/Habilidades";

export const Info = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleWheel = () => {
            if (!scrolled) {
                setScrolled(true);
                // Aqui você pode fazer algo quando o scroll for rolado pela primeira vez
            }
        };

        window.addEventListener('wheel', handleWheel);

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, [scrolled]);

    return (
        <div className={`
        m-auto bg-BGH brightness-150
        grid justify-center items-center 
        border-[#6f4b9b5b] border-t-[3px] rounded-sm pt-8 pb-0 mb-0  `
            + pageWidth}>

            <InfoHeader />



            <div className="m-auto  scroll-item-first
             n1:mb-44
             n7:mb-[16rem]
            ">
                <div className="flex flex-wrap  justify-center      
                n5:gap-10 
                n7:gap-4        
                ">
                    <div className="relative max-h-10">
                        {Motion(1.0, 1.0, <h2 className="PP relative top-2">Acesse meus projetos</h2>)}
                        {Motion(1.0, 1.1, <Algorithm name="Projetos" hover={'hover:after:right-7'} link='/projetos' target={""} />)}
                    </div>
                  
                    {/* <div className="max-h-10                    
                    ">
                        {Motion(1.0, 1.1, <h2 className="PP relative top-2">Algoritmos e matemática</h2>)}
                        {Motion(1.0, 1.2, < Algorithm name="HackerRank" hover={'hover:after:right-1'} link='https://www.hackerrank.com/lucasvm_ti' target="_blank" />)}
                    </div> */}


                </div>

                {/* {!scrolled ? <BlinkingIcon /> : null} */}
                <BlinkingIcon />


               


            </div>

            <div className="grid    itens-center">
                {/* <div className="m-auto grid itens-center scroll-item h-full">
                    <First />
                </div> */}
                {/* <div className="m-auto grid itens-center scroll-item h-[100vh]">

                    <Conhecimentos />
                  
                </div> */}
                {/* <div className="m-auto grid itens-center scroll-item h-[100vh]"> */}
                    {/* <Education /> */}
                    {/* <Third /> */}
                {/* </div> */}
            </div>
        </div >
    )
}