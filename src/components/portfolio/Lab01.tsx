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
            <img id="mouse" className="projCapa" src="/project1.png" alt="" />
          </button>
          <h2 className="imgTitle">ROCKETPAY</h2>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent focus:outline-none">
          <Dialog.Title className="DialogTitle">
            <h1 className="projTitle">
              RocketPay - <span className="projYear">2022</span>
            </h1>
          </Dialog.Title>

          <Dialog.Description className="Dgrid">
            <div id="img" className="banner">
              <video controls src="/Explorerlab.mp4"></video>
            </div>

            <div className="flex gap-1">
              <div className="flex gap-2">
                <div className="Icon">
                  <img className="h-5" src="/github-proj.png" alt="" />
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
                  src="/info.png"
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
                --{">"} Desenvolvido durante o evento Explorer Lab 01 da
                RokectSeat.
              </p>
              <div className="divTec">
                <h2 className="hTec">Tecnologias </h2>
                <p className="P">JavaScript, JSON, Node NPM, Vite.js, IMask</p>
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
