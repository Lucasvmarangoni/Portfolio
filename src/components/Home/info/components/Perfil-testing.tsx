import { Link } from "react-router-dom"
import { Motion } from "../../../functions/Motion"
import { pageWidth } from "../../../../pages/util/page-width"

export function PerfilTesting() {
    const square = "n5:w-6 n5:h-6 n7:w-4 n7:h-4 border-1 border-white rounded-sm brightness-75"
    const li = "flex gap-2 itens-center PP h-full"
    return (
        <div className="h-full grid items-center relative ">
            {/* <hr className=" relative top-[-5em] border-[3px] border-[#25252588]" /> */}
            <div className={"grid flex-wrap m-auto items-center justify-center n3:gap-10 n7:gap-2" + pageWidth}>

                <div className="grid gap-4 items-center justify-center">
                    {Motion(1.0, 1.0, <h1 className="text-T1 text-2xl text-center font-semibold brightness-200
                    n4:text-2xl 
                    n7:text-xl ">Perfil profissional</h1>)}
                    {Motion(1.0, 1.2, <p className="PP 
                    n4:px-20
                    n7:px-10
                    ">Meu teste de perfil profissional. Foi utilizado o modelo Big Five. </p>)}
                </div>

                <div className="flex flex-wrap   items-center justify-center
                n2:gap-6
                n7:gap-6
                
                ">
                    {Motion(1.5, 1.4, <img src="./perfil.png" alt="gráfico do teste de perfil" className="brightness-50
                    n2:w-[24rem]
                    n3:w-[14rem]                
                    n7:w-[10rem]
                    " />)}
                    <ul className=" grid gap-1 itens-center">
                        {Motion(0.7, 1.4, <li className={li}><div className={"bg-[#002427] " + square}></div>Capacidade analítica: 75.53</li>)}
                        {Motion(0.7, 1.5, <li className={li}><div className={"bg-[#028C96] " + square}></div>Pensamento conceitual: 80.07</li>)}
                        {Motion(0.7, 1.6, <li className={li}><div className={"bg-[#054976] " + square}></div>Reflexão: 77.90</li>)}
                        {Motion(0.7, 1.7, <li className={li}><div className={"bg-[#26BCEE] " + square}></div>Pensamento criativo: 82.34</li>)}
                        {Motion(0.7, 1.8, <li className={li}><div className={"bg-[#4A70E3] " + square}></div>Planejamento e organização: 66.43</li>)}
                        {Motion(0.7, 1.9, <li className={li}><div className={"bg-[#017B52] " + square}></div>Comunicação: 73.25</li>)}
                        {Motion(0.7, 2.0, <li className={li}><div className={"bg-[#17A01C] " + square}></div>Consideração pelos outros: 61.88</li>)}
                        {Motion(0.7, 2.1, <li className={li}><div className={"bg-[#01CB85] " + square}></div>Influência: 59.62</li>)}
                        {Motion(0.7, 2.2, <li className={li}><div className={"bg-[#83DF67] " + square}></div>Sociabilidade: 59.62</li>)}
                        {Motion(0.7, 2.3, <li className={li}><div className={"bg-[#4DF190] " + square}></div>Facilitação: 68.70</li>)}
                        {Motion(0.7, 2.4, <li className={li}><div className={"bg-[#A7F026] " + square}></div>Flexibilidade: 75.53</li>)}
                        {Motion(0.7, 2.5, <li className={li}><div className={"bg-[#A7493F] " + square}></div>Estabilidade emocional: 86.88</li>)}
                        {Motion(0.7, 2.6, <li className={li}><div className={"bg-[#BE5B00] " + square}></div>Ambição: 82.34</li>)}
                        {Motion(0.7, 2.7, <li className={li}><div className={"bg-[#E7652B] " + square}></div>Iniciativa: 77.80</li>)}
                        {Motion(0.7, 2.8, <li className={li}><div className={"bg-[#FF9E00] " + square}></div>Assertividade: 61.88</li>)}
                        {Motion(0.7, 2.9, <li className={li}><div className={"bg-[#FEE27E] " + square}></div>Tomada de riscos: 68.70</li>)}
                    </ul>
                </div>

                <div className="m-auto">
                    {Motion(0.7, 2.3, <Link to="/perfil-testing.pdf" target="_blank" className="
                font-medium text-T1 brightness-200
                border-[#3b27535b] border-b-[3px] 
                hover:opacity-90 
                setinha hover:after:right-7          
                w-48 h-12 text-xl                        
                ">
                        Veja Completo
                    </Link>)}
                </div>

            </div>
            <hr className=" relative top-[1em] border-[3px] border-[#25252588]" />
        </div>
    )
}