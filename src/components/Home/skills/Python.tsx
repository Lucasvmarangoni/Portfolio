import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

import "../styles.css";

export const Python = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild className="DialogTrigger">
      <button>
        <img className="IMG" src="/python.png" alt="" />
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent focus:outline-none">
        <Dialog.Title className="DialogTitle">
          <img className="Img" src="/python.png" alt="" />
          <h1>Python</h1>
        </Dialog.Title>

        <Dialog.Description className="Dgrid">
          <div className="Dgrid">
            <h2 className="H2">Formação</h2>
            <div className="LogoImg">
              <img src="/fiap.png" alt="" />
              <p className="P">FIAP - Python</p>
            </div>
          </div>

          <div className="Dgrid">
            <h2 className="H2">Prática</h2>
            <p className="P">
              Desenvolvi alguns pequenos projetos para praticar durante o curso.
            </p>
          </div>

          <div className="Dgrid">
            <h2 className="H2">Projetos</h2>
            <a href="https://github.com/Ldragk/Recepcao-Hospitalar">
              <p className="Proj">Recepcao Hospitalar</p>
            </a>
            <a href="https://github.com/Ldragk/Estoque-de-loja">
              <p className="Proj">Estoque de loja</p>
            </a>
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
