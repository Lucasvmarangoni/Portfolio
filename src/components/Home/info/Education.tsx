import { pageWidth } from "../../../pages/util/page-width";
import { Motion, MotionFirst } from "../../functions/Motion";
import CertificateCarousel from "./components/Certificate-carousel";
import { Community } from "./components/Community";
import { Now } from "./components/Now";


export function Education() {








    return (
        <div className="h-full grid items-center m-auto">

            <div className={`grid itens-center justify-center gap-10
            `}>
                <div className=" grid 
                n2:px-20 n2:gap-5
                n7:px-10 n7:gap-0
                "
                >
                    {Motion(1.0, 0.8, <h1 className="text-T1 brightness-200 font-semibold
                    n4:text-2xl 
                    n7:text-xl 
                    ">Educação</h1>)}


                    {Motion(1.0, 1.0,
                        <p className="PP flex justify-between"
                        >
                            <strong>Graduação em Cyber Security (cursando) </strong> <span>Saint Leo University</span> <span>Mar, 2024 - Dez, 2027</span>
                        </p>
                    )}


                    {Motion(1.0, 1.3,
                        <p className="PP flex justify-between"
                        >
                            <strong>Pós Graduação Direito Digital (cursando)</strong> <span>Legale Educacional</span> <span>Jan, 2024 - Set, 2024</span>
                        </p>
                    )}


                    {Motion(1.0, 1.5,
                        <p className="PP"
                        >
                            <div className="flex justify-between">
                                <strong>Analise e desenvolvimento de sistemas (Eixo I)</strong> <span>PUC Minas</span> <span>Fev, 2023 - Jun, 2023</span>
                            </div>

                            <p>
                                Desenvolvi e planejei projeto em equipe. Nosso projeto foi destaque do Eixo I.
                            </p>
                        </p>
                    )}

                    {Motion(1.0, 1.7,
                        <p className="PP"
                        >
                            <div className="flex justify-between">
                                <strong>Bacharelado em Direito</strong> <span>Estácio de Sá</span> <span>Fev, 2014 - Mar, 2022</span>
                            </div>
                            <p>
                                Exame da Ordem XXXII em 2021, 56 acertos na 1ª fase e 8,45 em Direito Tributário na 2ª fase.
                            </p>
                        </p>

                    )}


                </div>
                <div className={"flex flex-wrap justify-center items-center n2:gap-10 n7:gap-6 n2:px-20 n7:px-10" + pageWidth}>

                    {Motion(1.0, 1.0,
                        <CertificateCarousel />
                    )}


                </div>


            </div>
        </div>
    )
}