import { Motion } from "../../functions/Motion";
import { FigsCapaText } from "./functions/FigsCapaText";

export function TextCapa() {
  return (
    <div>
      <div className="text-center flex flex-col">
        {Motion(0.7, 0.2,
          <h1
            className="text-T2 font-medium brightness-[1.8]
        n0:text-2xl n0:text-left
        n1:text-2xl n1:text-left
        n2:text-2xl n2:text-left
        n3:text-base
        n4:text-base 
        n5:text-base 
        n6:text-base 
        n7:text-base"
          >
            {/* {<FigsCapaText />} */}
            Olá, meu nome é
          </h1>
        )}
        {Motion(0.7, 0.3,
          <h1
            className="text-T1 font-semibold brightness-[3]
        n0:text-3xl n0:text-left
        n1:text-3xl n1:text-left
        n2:text-2xl n2:text-left
        n3:text-lg 
        n4:text-base 
        n5:text-base 
        n6:text-base 
        n7:text-base"
          >
            Lucas V. Marangoni
          </h1>
        )}
        {Motion(0.7, 0.4,
          <p className="mb-1 text-justify           
          ">
            Sou desenvolvedor backend e Advogado especializado em proteção e privacidade de dados. Atualmente estudando 
            segurança cibernética ofensiva, pentest, para obter a certificação CPTS. 
          </p>
        )}
      </div>

    </div>
  );
}

