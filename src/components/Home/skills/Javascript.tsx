import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Nodejs } from "./others/Node";
import { Reactjs } from "./others/React";
import { Typescript } from "./others/Typescript";
import { Vitejs } from "./others/Vite";
import "../styles.css";

export const Javascript = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild className="DialogTrigger">
      <button>
        <img className="IMG" src="/JS.png" alt="Javascript" />
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent focus:outline-none">
        <Dialog.Title className="DialogTitle">
          <img className="Img" src="/JS.png" alt="" />
          <h1>JavaScript</h1>
        </Dialog.Title>

        <Dialog.Description>
          <div className="Dgrid">
            <div className="Dgrid">
              <h2 className="H2">Formação</h2>
              <div className="LogoImg">
                <img src="/rocketseat.png" alt="" />
                <p className="P">RocketSeat - Discover</p>
              </div>
            </div>

            <div className="Dgrid">
              <h2 className="H2">Prática</h2>
              <div className="P">
                <p>
                  Desenvolvi projetos em javascript, sendo o mais relevante um
                  formulario de pagamento com cartão de crédito no Explorer Lab
                  01, evento promovido pela RocketSeat.
                </p>
                <p className="mt-3">
                  -&gt; Nesse projeto criei, por conta própria, o modelo de
                  cartão com a bandeira ELO.
                </p>
              </div>
            </div>
          </div>

          <div className="Dgrid">
            <h2 className="H2">Projetos</h2>
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href="https://github.com/Ldragk/Explorer-Lab-01"
            >
              <p className="Proj">Explorer Lab 01 </p>
            </a>
          </div>
        </Dialog.Description>

        <div className="Dgrid">
          <h2 className="H2">Tecnologias</h2>
          <Dialog.Close asChild className="flex">
            <Typescript />
          </Dialog.Close>
          <Dialog.Close asChild className="flex">
            <Reactjs />
          </Dialog.Close>
          <Dialog.Close asChild className="flex">
            <Nodejs />
          </Dialog.Close>
          <Dialog.Close asChild className="flex">
            <Vitejs />
          </Dialog.Close>
        </div>

        <Dialog.Close asChild>
          <button className="IconButton">
            <Cross2Icon color="#ffffff85" />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
