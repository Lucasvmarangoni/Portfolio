import { pageWidth } from "../../../pages/util/page-width";
import { Motion, MotionFirst } from "../../functions/Motion";
import { Now } from "./components/Now";

export function InfoHeader() {
    return (
        <div >
            {Motion(1.0, 1.5,
                <div className="relative">
                    <h1 className="
                 text-T1 font-semibold 
                 absolute 
                 bg-BG brightness-200
                 max-w-[fit-content] 
                 n3:text-2xl n3:top-[-2.2em] n3:left-8 
                 n6:text-xl n6:top-[-2.5em] n6:left-[1.2em]                 
                 n7:text-lg n7:top-[-2.7em] n7:left-[-1.3em] 
                 ">
                        Informações técnicas
                    </h1>
                </div>
            )}

            {Motion(1.0, 1.7,
                <div className={"relative " + pageWidth}>
                    <div className="absolute top-0 right-0 mt-[-2em] 
                n0:mr-[0.1em] 
                n7:mr-[0.1em]                
                ">
                        {/* <Now /> */}
                    </div>
                </div>)},
        </div>
    )
}