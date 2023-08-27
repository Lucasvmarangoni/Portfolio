import { pageWidth } from "../../../pages/util/page-width";
import { Motion } from "../../functions/motion";
import { Algorithm } from "./components/Algorithm";
import { ButtonPort } from "./components/ButtonPort";
import { Now } from "./components/Now";

export function First() {
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



    return (
        

        Motion(1.0, 1.8,
            <div className=" 
            flex align-center justify-center flex-wrap m-auto py-8
            n0:gap-8 n0:mb-0
            n7:gap-6 n7:mb-0
            
            ">
                <div className="">
                    <h2 className="text-T1 brightness-200 font-semibold relative top-14 text-xl 
                n2:text-center n2:w-[600px]
                n4:top-14
                n5:top-10
                n6:top-8
                n7:text-center n7:top-6
                n4:text-2xl 
                n6:text-lg              
                n7:text-lg
                ">Linguagens que utilizo</h2>
                        <img
                            src={githubStatsUrl}
                            className="w-[530px] m-auto"
                        />
                    </div>


                <div className="m-auto flex  gap-12
                n1:flex-col 
                n7:flex-row
                ">
                    <ButtonPort />
                    <Algorithm  name="HackerRank"/>
                </div>


            </div>
        )
    )
}