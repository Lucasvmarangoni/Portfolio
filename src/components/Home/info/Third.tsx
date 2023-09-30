import { pageWidth } from "../../../pages/util/page-width";
import { PerfilTesting } from "./components/Perfil-testing";

export function Third() {
    const username = "Lucasvmarangoni";
    const customTitle = "GitHub Activity Graph";
    const bgColor = "030303";
    const color = "3b27535b";
    const line = "3b27535b";
    const point = "ffffff85";
    const areaColor = "030303";
    const titleColor = "3b27535b";
    const hideBorder = true
    const hideTitle = true
    const area = true;

    const linkGraph =
        `https://github-readme-activity-graph.vercel.app/graph?username=${username}&custom_title=${customTitle}&bg_color=${bgColor}&color=${color}&line=${line}&point=${point}&area_color=${areaColor}&title_color=${titleColor}&area=${area}&hide_border=${hideBorder}&hide_title=${hideTitle}`
    const link =
        `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&langs_count=2&hide_title=${hideTitle}&bg_color=${bgColor}&hide_border=${hideBorder}`

    return (
        <div className={"flex flex-wrap justify-center items-center p-10 m-auto" + pageWidth
        }>
            <div className="grid gap-4">
                <h1 className="text-T1 text-center font-semibold brightness-200
                    n4:text-2xl 
                    n7:text-xl 
                    ">Estatísticas Github</h1>
                <div className="flex flex-wrap items-center justify-center w-full">
                    <img src={link} className="brightness-100 h-48" alt="Lucasvmarangoni's Github Activity Graph" />
                    <p className="text-T2 max-w-[28em] PP">TypeScript (Node) foi a primeira pela baixa curva de aprendizado. Go por sua aplicação em projetos criticos,
                        mas o diferencial foi sua forma única de fazer as coisas, com a qual me identifiquei. Além disso, se complementam,
                        em operações de E/S e em processamento de CPU. </p>
                </div>

                <div className="grid justify-center mt-4">
                    <h2 className="text-T1 PP text-center font-semibold brightness-200">Grafico de atividades no Github</h2>
                    <img src={linkGraph} className="brightness-200 w-full" alt="Lucasvmarangoni's Github Activity Graph" />
                </div>
            </div>
            {/* <PerfilTesting /> */}
        </div>
    )
}