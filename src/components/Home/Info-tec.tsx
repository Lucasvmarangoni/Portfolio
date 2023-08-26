import { Motion } from "../functions/motion";
import { ButtonPort } from "./info/ButtonPort";
import { Now } from "./info/Now";

export const Info = () => {
    const status = {
        username: "Lucasvmarangoni",
        layout: "compact",
        titleColor: "030303",
        textColor: "ffffff85",
        bgColor: "030303",
        borderColor: "3b2753e5",
        borderRadius: "5",
        hideBorder: "true",
        langsCount: "4",
    }
    const {
        username,
        layout,
        titleColor,
        textColor,
        bgColor,
        borderColor,
        borderRadius,
        hideBorder,
        langsCount,
    } = status;
    const githubStatsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=${layout}&title_color=${titleColor}&text_color=${textColor}&bg_color=${bgColor}&border_color=${borderColor}&border_radius=${borderRadius}&hide_border=${hideBorder}&langs_count=${langsCount}`;

    // TODO  When there is more content, use the BGH color.

    return (
        <div className="
        m-auto bg-BG 
        grid justify-between items-center 
        border-[#6f4b9b5b] border-y-[3px] rounded-sm p-8 
        n0:w-[1030px] 
        n1:w-[830px]
        n2:w-[781px]
        n3:w-[576px] 
        n4:w-[530px] 
        n5:w-[430px] 
        n6:w-[350px] 
        n7:w-[240px] 
        ">

            {Motion(1.0, 1.5,
                <div className="relative">
                    <h1 className="
                 text-T1 font-semibold text-2xl 
                 absolute top-[-2.2em] left-0 
                 bg-BG brightness-200
                 max-w-[fit-content] ">
                        Informações técnicas
                    </h1>
                </div>
            )}

            {Motion(1.0, 1.7,

                <div className="relative">
                    <div className="absolute top-0 right-0 mt-[-2em] 
                n0:mr-[-7.5em]     
                n4:mr-[-2em]            
                n7:mr-[0.2em]                
                ">
                        <Now />
                    </div>
                </div>)}






            {/* {Motion(1.0, 1.7,
                <p className="text-T2 pt-6 max-h-0 invisible">
                    Atualmente, estou utilizando Node.js desenvolvendo APIs, e pretendo logo começar a
                    desenvolver projetos com Golang.
                </p>
            )} */}





            {Motion(1.0, 1.8,
                <div className=" 
            flex align-center justify-center flex-wrap m-auto
            n0:gap-20 n0:mb-0
            n7:gap-0 n7:mb-12
            
            ">
                    <div className=" mb-10">
                        <h2 className="text-T1 brightness-200 font-semibold relative top-14 text-xl 
                    n2:text-center n2:w-[600px]
                    n4:top-14
                    n5:top-10
                    n6:top-8
                    n7:text-center n7:top-6
                    ">Linguagens que utilizo</h2>
                        <img
                            src={githubStatsUrl}
                            className="w-[530px] m-auto min-w-[400px]"
                        />
                    </div>


                    <div className="m-auto">
                        <ButtonPort />
                    </div>


                </div>
            )}





        </div >
    )
}