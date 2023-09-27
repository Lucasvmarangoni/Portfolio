import { Motion } from "../../functions/Motion";
import { FigsBackText } from "./functions/FigsBackText";

export function BackText() {
  return (
    <div>
      {<FigsBackText />}
      {
        Motion(0.7, 0.2,
          <p className="text-justify flex ">
            Por ter encontrado essa seção, vou contar um pouco mais sobre mim. Sou Bacharel em direito. 
            Meu principal hobby é anime, o segundo games, principalmente mmo rpg.
            Também gosto de musculação e calistenia e faço coleção de conchas que encontro.
            Busco sempre estar rodeado de pessoas que fazem eu sentir que não sei de nada,
            assim mantenho a motivação para evoluir constantemente.
          </p>)
      }
    </div>
  );
}
