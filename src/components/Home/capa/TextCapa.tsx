import { Motion } from "../../functions/Motion";
import { FigsCapaText } from "./functions/FigsCapaText";

export function TextCapa() {
  return (
    <div>
      <div className="mb-2 text-center flex flex-col">
        {Motion(0.7, 0.2,
          <h1
            className="text-T2 font-medium 
        n0:text-2xl n0:text-left
        n1:text-2xl n1:text-left
        n2:text-2xl n2:text-left
        n3:text-base
        n4:text-sm 
        n5:text-xs 
        n6:text-xs 
        n7:text-xs"
          >
            {<FigsCapaText />}
            Ola, meu nome é
          </h1>
        )}
        {Motion(0.7, 0.3,
          <h1
            className="text-T1 font-semibold brightness-200
        n0:text-3xl n0:text-left
        n1:text-3xl n1:text-left
        n2:text-2xl n2:text-left
        n3:text-lg 
        n4:text-base 
        n5:text-sm 
        n6:text-sm 
        n7:text-sm"
          >
            Lucas Vazzoller Marangoni
          </h1>
        )}
        {Motion(0.7, 0.4,
          <p className="mb-1 text-justify 
          ">
            Sou desenvolvedor <span className="text-T1 brightness-200 font-semibold">backend Node.js</span>. Iniciei meu caminho como desenvolvedor em agosto de 2022,
            logo no inicio já escolhi o backend, pois esse enorme universo e programar me proporcionar grande estimulo mental, 
            sinto como se estivesse jogando.
            Neste espaço, apresento meus principais projetos, além de compartilhar algumas informações sobre mim.
          </p>
        )}
      </div>

    </div>
  );
}

