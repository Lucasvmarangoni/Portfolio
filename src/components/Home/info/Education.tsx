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

                    {Motion(1.0, 0.9,
                        <p className="PP"
                        > Me interesso por todo o universo de tecnologia, por isso, busco sempre aumentar minha compreensão sobre tudo. A maior parte da minha educação vem de conteúdos gratuitos, mas
                            abaixo apresento algumas das minhas fontes de conhecimento.
                        </p>
                    )}

                    {Motion(1.0, 1.0,
                        <p className="PP"
                        >
                            Sou bacharel em direito, aprovado na exame da ordem XXXII em direito tributário, estagiei por 4 messes em direito empresarial.
                        </p>
                    )}

                    {Motion(1.0, 1.3,
                        <p className="PP"
                        >
                            Iniciei uma graduação de Analise e desenvolvimento de sistemas na PUC Minas, onde pude ampliar minhas habilidades interpessoais desenvolvendo
                            e planejando projeto em equipe. Nosso projeto foi destaque do Eixo I, sendo selecionado para mostra de projetos.
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