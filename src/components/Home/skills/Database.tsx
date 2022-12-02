import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { SQLite } from "./others/SQLite";

import "../styles.css";

export const Database = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild className="DialogTrigger">
      <button>
        <img className="IMG" src="./public/database.png" alt="" />
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent focus:outline-none">
        <Dialog.Title className="DialogTitle">
          <img
            className="Img"
            src="./public/database1.png"
            alt="Bancos de dados"
          />
          Bancos de dados
        </Dialog.Title>

        <Dialog.Description>


         <SQLite />
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
