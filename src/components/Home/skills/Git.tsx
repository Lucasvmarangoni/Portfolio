import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "../styles.css";

export const Git = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild className="DialogTrigger">
      <button>
        <img className="IMG" src="/git1.png" alt="" />
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent focus:outline-none">
        <Dialog.Title className="DialogTitle">
          <img className="Img" src="/git1.png" alt="" />
          <h1>Git e Github </h1>
        </Dialog.Title>

        <Dialog.Description>
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
                Inialmente aprendi no meu primeiro projeto da RockeSeat, o NLW
                eSports, posteriormente continuei usando em meus estudos, até
                que cheguei nessa parte do curso Discover.
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
