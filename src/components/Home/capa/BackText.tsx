import { Motion } from "../../functions/Motion";
import { FigsBackText } from "./functions/FigsBackText";

export function BackText() {
  return (
    <div className="brightness-[1.8]">
      {/* {<FigsBackText />} */}
      {
        Motion(0.7, 0.2,
          <p className="text-justify flex">
            Meu portfólio esta em replanejamento. Estou avaliando o
            atual valor de investir tempo nele atualmente. Caso seja um recrutador e esteja o acessando, por favor contribua com seu feedback. 
            Eu possuindo linkedin e github bem estruturados, faz sentido ter um portfólio?
          </p>)
      }
    </div>
  );
}

