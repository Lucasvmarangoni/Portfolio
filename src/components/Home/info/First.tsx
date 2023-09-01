import { pageWidth } from "../../../pages/util/page-width";
import { Motion, MotionFirst } from "../../functions/Motion";


export function First() {
    const status = {
        username: "Lucasvmarangoni",
        layout: "compact",
        titleColor: "030303",
        textColor: "ffffff85",
        bgColor: "070707",
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



    return (

        <div className=" grid items-center mt-10">

           
            <div className={`
            grid align-center justify-center flex-wrap m-auto
            n2:gap-16 n2:pr-0
            n7:gap-6 n7:pr-0` + pageWidth}

            >

{/*                 
                <div className="grid gap-4 m-auto">
                    <h2 className="text-T1 text-2xl font-semibold brightness-200">Linha do tempo</h2>
                    <ul>
                        <li className="PP ">Dez - 1995 - Nasci em Castelo-ES.</li>                        
                        <li className="PP ">Ago - 2021 - Aprovado em direito tributário no exame da ordem.</li>
                        <li className="PP ">Set - 2021 - Estágio no escritório ARS.</li>
                        <li className="PP ">Dez - 2021 - Graduado e bacharel em Direito.</li>                        
                        <li className="PP ">Ago - 2022 - Inicio dos meus estudos como desenvolvedor.</li>
                        <li className="PP ">Presente - Buscando minha primeira vaga como dev.</li>
                    </ul>
                </div> */}

                <div className="grid gap-4 justify-center px-20">
                    {
                        Motion(1.0, 0.8,
                            <h2 className="text-T1 text-2xl font-semibold brightness-200">                                
                                
                            </h2>
                        )
                    }
                    {
                        Motion(1.0, 0.9,
                            <p className="P">
                                
                            </p>
                        )}

                </div>                

                <div className="m-auto relative top-[-3em]">
                    <h2 className="text-T1 brightness-200 font-semibold relative top-14 text-xl 
                n2:text-center 
                n4:top-16
                n5:top-10
                n6:top-10
                n7:text-center n7:top-6
                n4:text-2xl 
                n6:text-lg              
                n7:text-lg
                "> {Motion(1.0, 1.4, "Linguagens que utilizo")}</h2>
                    {Motion(1.0, 1.5,
                        <img
                            src={githubStatsUrl}
                            className="w-[600px]"
                        />
                    )}
                </div>

            </div>
            {/* <hr className=" relative top-[em] border-[3px] border-[#25252588]" /> */}
        </div>

    )
}