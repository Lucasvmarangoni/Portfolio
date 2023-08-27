import { Motion } from "../../functions/Motion";
import { FigsBackText } from "./functions/FigsBackText";

export function BackText() {
  return (
    <div>
      {<FigsBackText />}
      {
        Motion(0.7, 0.2,
          <p className="text-justify flex ">
            Escolhi ser desenvolvedor Back-end porque gosto de trabalhar com lógica
            e resolver problemas. Acredito que o back-end mais se alinha com minhas
            habilidades e interesses. Assim anseio por me envolver e contribuir em
            projetos complexos e de grande importância para a sociedade e para o
            mundo, possibilitando aproveitar ao máximo meu potencial e me
            desenvolver como profissional.
          </p>)
      }
    </div>
  );
}
