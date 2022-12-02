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

export const Lab01 = () => {
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
              className="projCapa"
              src="../../../public/project1.png"
              alt=""
            />
          </button>
          <h2 className="imgTitle">Explorer Lab 01</h2>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent focus:outline-none">
          <Dialog.Title className="DialogTitle"></Dialog.Title>

          <Dialog.Description className="Dgrid">
            <h1 className="projTitle">
              Explorer Lab 01 - <span className="projYear">2022</span>
            </h1>
            <div id="img" className="banner">
              <video controls src="../../../public/Explorerlab.mp4"></video>
            </div>

            <div className="flex gap-1">
              <div className="flex gap-2">
                <div className="Icon">
                  <img
                    className="h-5"
                    src="../../../public/github-proj.png"
                    alt=""
                  />
                  <a
                    className="hover:underline"
                    href="https://github.com/Ldragk/Explorer-Lab-01"
                  >
                    Github
                  </a>
                </div>

                <div className="Icon">
                  <a
                    target={"_blank"}
                    className="setinha font-semibold hover:after:right-4 "
                    href="https://explorer-lab-01-two-lemon.vercel.app/"
                  >
                    Demo
                  </a>
                </div>
              </div>

              <div onMouseOver={MOver} onMouseOut={MOut}>
                <span
                  className="invisible text-T2 bg-BGH p-2 rounded-md ml-4 absolute"
                  id="myPopup"
                >
                  <p>Visa: 4</p>
                  <p>Master: 54</p>
                  <p>ELO: 650485</p>
                </span>
                <img
                  className="w-4 cursor-pointer opacity-80"
                  src="../../../public/info.png"
                  alt=""
                />
              </div>
            </div>

            <div className="mt-2">
              <p className="P">
                O Rocketpay é um componente que simula o formulário de
                preenchimento de cartão de crédito, onde é possível adicionar
                máscara aos inputs e atualizar elementos HTML via DOM.
              </p>
              <p className="P mt-2">
                -&gt; Nesse projeto criei, por conta própria, o modelo de cartão
                com a bandeira ELO.
              </p>
              <div className="divTec">
                <h2 className="hTec">Tecnologias </h2>
                <p className="P">JavaScript, JSON, Node NPM, Vite.js, IMask</p>
              </div>
            </div>
          </Dialog.Description>

          <Dialog.Close asChild>
            <button className="IconButton">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
