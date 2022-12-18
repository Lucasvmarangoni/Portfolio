import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Slides } from "../functions/Slides";
import "./styles.css";

const MOver = () => {
  const popup: any = document.querySelector("#myPopup");
  popup.style = "visibility: visible;";
};
const MOut = () => {
  const popup: any = document.querySelector("#myPopup");
  popup.style = "visibility: hidden;";
};

export const Port = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        asChild
        className="m-auto 
     "
      >
        <div className="divCapa">
          <button>
            <img
              id="mouse"
              className="projCapa border border-[#1b1b1bab]"
              src="/readme.png"
              alt=""
            />
          </button>
          <h2 className="imgTitle">Website Portfólio</h2>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent focus:outline-none">
          <Dialog.Title className="DialogTitle">
            <h1 className="projTitle">
              Website Portfólio - <span className="projYear">2022</span>
            </h1>
          </Dialog.Title>

          <Dialog.Description className="Dgrid">
            <div id="img" className="banner">
              <img src="/readme.png"></img>
            </div>

            <div className="flex gap-1">
              <div className="flex gap-2">
                <div className="Icon">
                  <img className="h-5" src="/github-proj.png" alt="" />
                  <a
                    className="hover:underline"
                    href="https://github.com/Ldragk/Portfolio"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-2">
              <p className="P">
                Projeto Web desenvolvido para minha apresentação pessoal e
                exposição de meus projetos pessoais como Software Engineer.{" "}
                <br />
                Também utilizo para praticar o que aprendo em cursos, por esse
                motivo busco sempre aplicar o máximo de funcionalidades
                possíveis, sem deixar que isso prejudique a qualidade e o
                objetivo do site.
              </p>

              <div className="divTec">
                <h2 className="hTec">Tecnologias </h2>
                <p className="P">
                  TypeScript, Node NPM, Vite.js, React.js, TailWind, Radix ui,
                  Framer
                </p>
              </div>
            </div>
          </Dialog.Description>

          <Dialog.Close asChild>
            <button className="IconButton">
              <Cross2Icon color="#ffffff85" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
