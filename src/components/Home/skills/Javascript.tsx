import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Nodejs } from "./others/Node";
import { Reactjs } from "./others/React";
import { Typescript } from "./others/Typescript";
import { Vitejs } from "./others/Vite";
import "../styles.css";

export const Javascript = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="DialogTrigger">
        <img className="IMG" src="../../../../public/JS.png" alt="" />
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent focus:outline-none">
        <Dialog.Title className="DialogTitle">
          <img className="Img" src="../../../../public/JS.png" alt="" />
          <h1>JavaScript</h1>{" "}
        </Dialog.Title>

        <Dialog.Description>
          <div className="grid gap-5">
            <div className="Dgrid">
              <h2 className="H2">Formação</h2>
              <div className="LogoImg">
                <img src="../../../../public/rocketseat.png" alt="" />
                <p className="P">RocketSeat - Discover</p>
              </div>
            </div>

            <div className="Dgrid">
              <h2 className="H2">Prática</h2>
              <p className="P">
                Desenvolvi projetos em javascript, sendo o mais relevante um
                formulario de pagamento com cartão de crédito no Explorer Lab
                01, evento promovido pela RocketSeat.
                <p className="mt-3">
                  -{">"} Nesse projeto criei, por conta própria, o modelo de
                  cartão com a bandeira ELO.
                </p>
              </p>
            </div>
          </div>

          <div className="Dgrid">
            <h2 className="H2">Projetos</h2>
            <a href="https://github.com/Ldragk/Explorer-Lab-01">
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
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
