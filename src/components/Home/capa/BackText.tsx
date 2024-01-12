import { Motion } from "../../functions/Motion";
import { FigsBackText } from "./functions/FigsBackText";

export function BackText() {
  return (
    <div className="brightness-[1.8]">
      {<FigsBackText />}
      {
        Motion(0.7, 0.2,
          <p className="text-justify flex">
            Profissionalmente, tenho o objetivo de participar e contribuir em projetos complexos, que me permitam estar próximo de grandes pessoas e, assim, 
            manter-me em constante evolução profissional e pessoal. Para alcançar esse objetivo, estou sempre buscando novos conhecimentos e habilidades.
          </p>)
      }
    </div>
  );
}
