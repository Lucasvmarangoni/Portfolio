import { FigsCapaText } from "./functions/FigsCapaText";

export function TextCapa() {
  return (
    <>
      <div className="mb-2 text-center flex flex-col">
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
        <p className="mb-1 text-justify 
        ">
          Sou desenvolvedor backend Node.js. Gosto de programar porque para mim é como se estivesse jogando.
          Quando preciso criar algo, fico empolgado para construir o código da melhor forma e,
          quando surgem problemas, sinto-me desafiado.
          Neste espaço, apresento meus principais projetos, bem como compartilho algumas informações sobre mim.
        </p>
      </div>

    </>
  );
}

