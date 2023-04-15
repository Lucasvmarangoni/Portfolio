import { FigsCapaText } from "./functions/FigsCapaText";

export function TextCapa() {
  return (
    <>
      <div className="mb-2 text-center">
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
        <h1
          className="text-T1 font-semibold
        n0:text-3xl n0:text-left
        n1:text-3xl n1:text-left
        n2:text-2xl n2:text-left
        n3:text-lg 
        n4:text-base 
        n5:text-sm 
        n6:text-sm 
        n7:text-xs"
        >
          Lucas Vazzoller Marangoni
        </h1>
      </div>
      <p className="mb-1 ">
      Sou desenvolvedor <span className="text-T1">back-end</span> e estou cursando a graduação de Tecnólogo em 
      Análise e Desenvolvimento de Sistemas na Pontifícia Universidade Católica de Minas Gerais. 
      Aqui, apresento meus principais projetos, além de compartilhar algumas informações sobre mim.   
      </p>
    </>
  );
}

