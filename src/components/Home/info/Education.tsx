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
                        <p className="PP"
                        >
                            Sou Graduado em <strong>Direito</strong> em 2022 e aprovado na exame da ordem XXXII em direito tributário com a nota de 8.45 e 56 acertos na primeira fase.
                        </p>
                    )}

                    {Motion(1.0, 1.3,
                        <p className="PP"
                        >
                            Cursei o primeiro período da graduação de <strong>Analise e desenvolvimento de sistemas na PUC Minas</strong>. Nesse tempo, pude ampliar minhas habilidades interpessoais desenvolvendo
                            e planejando projeto em equipe. <strong>Nosso projeto foi destaque do Eixo I</strong>, sendo selecionado para mostra de projetos.
                        </p>
                    )}

                    {Motion(1.0, 1.5,
                        <p className="PP"
                        >
                            Atualmente, estou matriculado na pós-graduação em <strong>Direito Digital pela Legale Educacional</strong> e, simultaneamente, estou iniciando uma nova graduação em <strong>Cyber Security na Saint Leo University</strong>.
                        </p>
                    )}

                    {Motion(1.0, 1.5,
                        <p className="PP"
                        >
                            Em cursos livres, busco conhecimento teórico para ampliar minha compreensão sobre o universo de tecnologias, adquirir novos conhecimentos e aprimorar minhas habilidades práticas.
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