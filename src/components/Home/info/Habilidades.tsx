import { Link } from "react-router-dom";
import { pageWidth } from "../../../pages/util/page-width";
import { Motion, MotionFirst } from "../../functions/Motion";
import CertificateCarousel from "./components/Certificate-carousel";
import { Community } from "./components/Community";
import { RiCornerDownRightFill } from "react-icons/ri";
import BlinkingIcon from "./components/BlinkingIcon";


export function Conhecimentos() {


    const card = (src: string, to: string, text: string) => {
        return (
            <div className="flex gap-1 itens-center mt-3">
                <img src={src} alt="" className="w-6 h-6 brightness-75" />
                <Link to={to} className="PP hover:underline text-T1 brightness-[3]" target="_blank">{text}</Link>
            </div>
        )
    }

    return (
        <div className="h-full grid items-center m-auto ">

            <div className={`grid itens-center justify-center  gap-10    
            `}>
                <div className=" grid 
                n2:px-20 n2:gap-4
                n7:px-10 n7:gap-0
                "
                >
                    {Motion(1.0, 0.8, <h1 className="text-T1 brightness-200 font-semibold
                    n4:text-2xl 
                    n7:text-xl 
                    ">Habilidades</h1>)}
                    {Motion(1.0, 0.9,
                        <p className=" grid gap-4"
                        >
                            {Motion(1.0, 1.3, <p className="PP">
                                Tenho conhecimentos em arquitetura e design de software SOLID, DDD, performance (latência e Throughput), escalabilidade,
                                disponibilidade, segurança, monitoramento, auditoria, croos-cutting, resiliência e sistemas distribuídos. Estou sempre buscando me
                                aperfeiçoar para contribuir em projetos complexos.

                            </p>)}

                            {Motion(1.0, 1.6, <p className="PP ">
                                Tenho conhecimento e me mantenho atualizado também sobre as vulnerabilidades em aplicações web. Sou membro Founder da Pato Academy.

                                <div className="flex gap-2">
                                    {Motion(1.0, 2.2, < RiCornerDownRightFill className=" text-T1 text-[3rem] brightness-200" />)} {Motion(1.0, 1.6, card("pato.png", "https://pato.academy/lp/", "Pato Academy"))}
                                </div>
                                {Motion(1.0, 2.4, <p className="PP ">Escola e comunidade de Bug Bounty, aprendo principalmente sobre vulnerabilidades e como explorá-las.</p>)}
                            </p>)}

                            {Motion(1.0, 1.8, <p className="PP ">
                                Busco me manter capacitado sobre o mercado de tecnologia, boas práticas de desenvolvimento e conduta profissional. Busco estar próximo de profissionais experientes
                                participando da comunidade Tech Leads Club.
                                <div className="flex gap-2">
                                    {Motion(1.0, 2.2, < RiCornerDownRightFill className="text-T1 text-[3rem] brightness-200" />)} {Motion(1.0, 1.7, card("techleads.png", "https://comece.techleads.club", "Tech Leads Club"))}
                                </div>
                                {Motion(1.0, 2.4, <p className="PP ">Comunidade sobre desenvolvimento e arquitetura de software, liderança técnica, gerenciamento e estratégia, carreira e tendências.</p>)}
                            </p>)}
                        </p>
                    )}
                </div>

                <div className={"flex flex-wrap justify-center items-center n2:gap-10 n7:gap-6" + pageWidth}>



                </div>
            </div>
        </div>
    )
}