import { Motion } from "../../functions/Motion";
import { FigsBackText } from "./functions/FigsBackText";

export function BackText() {
  return (
    <div className="brightness-[1.8]">
      {/* {<FigsBackText />} */}
      {
        Motion(0.7, 0.2,
          <p className="text-justify flex">
            NEM UM TEXTO AQUI POR ENQUANTO
          </p>)
      }
    </div>
  );
}

