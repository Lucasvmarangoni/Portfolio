import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

import "../styles.css";

export const Git = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild className="DialogTrigger">
      <button>
        <img className="IMG" src="./public/git.png" alt="" />
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent focus:outline-none">
        <Dialog.Title className="DialogTitle">
          <img className="Img" src="./public/git1.png" alt="" />
          Git e Github         
        </Dialog.Title>

        <Dialog.Description>
          <div className="Dgrid">
            <h2 className="H2">Formação</h2>
            <div className="LogoImg">
              <p className="P">
                Aprendi enquanto fiz os projetos dos eventos da RokectSeat e,
                também, usando durante meus estudos.
              </p>
            </div>
          </div>
        </Dialog.Description>

        <Dialog.Close asChild>
          <button className=""></button>
        </Dialog.Close>

        <Dialog.Close asChild>
          <button className="IconButton">
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
