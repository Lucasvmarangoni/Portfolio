import { Motion, MotionFirst } from "../functions/Motion";
import { ButtonPort } from "./info/components/ButtonPort";
import CertificateCarousel from "./info/components/Certificate-carousel";
import { First } from "./info/First";
import { Now } from "./info/components/Now";
import { Second } from "./info/Second";
import { Third } from "./info/Third";
import { pageWidth } from "../../pages/util/page-width";
import { InfoHeader } from "./info/info-header";
import BlinkingIcon from "./info/components/BlinkingIcon";
import { Algorithm } from "./info/components/Algorithm";

export const Info = () => {

    // TODO  When there is more content, use the BGH color.


    return (
        <div className={`
        m-auto bg-BGH
        grid justify-center items-center 
        border-[#6f4b9b5b] border-t-[3px] rounded-sm p-8  `
            + pageWidth}>

            <InfoHeader />

            {/* TODO colocar seta informando mais informações abaixo. */}

            <div className=" m-auto
            n1:mb-44
            n7:mb-[16rem]
            ">

                <div className=" flex flex-wrap  align-center justify-center m-auto        
                n5:gap-16
                n7:gap-10        
                ">
                    <div>
                        {Motion(1.0, 1.0, <h2 className="P">Acesse meus projetos: </h2>)}
                        {Motion(1.0, 1.1, <ButtonPort />)}
                    </div>

                    <div>
                        {Motion(1.0, 1.1, <h2 className="P">Algoritmos e matemática: </h2>)}
                        {Motion(1.0, 1.2, < Algorithm name="HackerRank" />)}
                    </div>
                </div>


                <BlinkingIcon />


            </div>

            <div className="grid gap-20   itens-center">
                {/* <div className="m-auto grid itens-center scroll-item h-[93vh]">
                    <First />
                </div> */}
                <div className="m-auto grid itens-center scroll-item h-[93vh]">
                    <Second />
                </div>
                <div className="m-auto grid itens-center scroll-item h-[93vh]">
                    <Third />
                </div>
            </div>



        </div >
    )
}