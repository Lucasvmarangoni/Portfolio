import { Motion, MotionFirst } from "../functions/Motion";
import { ButtonPort } from "./info/components/ButtonPort";
import CertificateCarousel from "./info/components/Certificate-carousel";
import { First } from "./info/First";
import { Now } from "./info/components/Now";
import { Second } from "./info/Second";
import { Third } from "./info/Third";
import { pageWidth } from "../../pages/util/page-width";

export const Info = () => {

    // TODO  When there is more content, use the BGH color.


    return (
        <div className={`
        m-auto bg-BG 
        grid justify-between items-center 
        border-[#6f4b9b5b] border-y-[3px] rounded-sm p-8  `
            + pageWidth}>

            {MotionFirst(1.0, 1.5,
                <div className="relative">
                    <h1 className="
                 text-T1 font-semibold 
                 absolute 
                 bg-BG brightness-200
                 max-w-[fit-content] 
                 n3:text-2xl n3:top-[-2.2em] n3:left-0 
                 n6:text-xl n6:top-[-2.5em] n6:left-[-1em]                 
                 n7:text-lg n7:top-[-2.7em] n7:left-[-1.3em] 
                 ">
                        Informações técnicas
                    </h1>
                </div>
            )}

            {MotionFirst(1.0, 1.7,
                <div className={"relative " + pageWidth}>
                    <div className="absolute top-0 right-0 mt-[-2em] 
                n0:mr-[1.9em] 
                n7:mr-[2em]                
                ">
                        <Now />
                    </div>
                </div>)},

            <div className="grid gap-28">
                <First />

                <Second />

                <Third />
            </div>



        </div >
    )
}