import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "../styles.css";

export const Security = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild className="DialogTrigger">
      <button>
        <img className="IMG" src="/security.png" alt="" />
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent focus:outline-none">
        <Dialog.Title className="DialogTitle">
          <img className="Img" src="/security.png" alt="" />
          <h1>CiberSecurity</h1>
        </Dialog.Title>

        <Dialog.Description className="Dgrid">
          <div className="Dgrid">
            <h2 className="H2">Formação</h2>
            <div className="LogoImg">
              <img src="/pato.png" alt="" />
              <p className="P">Pato Academy - Do bug ao bounty</p>
            </div>
          </div>

          <div className="Dgrid">
            <h2 className="H2">Prática</h2>
            <div className="P">
              <p>
                O curso da Pato Academy é uma assinatura em que novas aulas são
                disponibilizadas constantemente, as quais eu acompanho.
              </p>
              <p>
                No curso são disponibilizados Labs (exercícios) para praticar os
                conceitos aprendidos de Bug Bounty, o que não só me proporciona
                o conhecimento sobre as vulnerabilidades como também sobre como
                um invasor estaria operando contra a aplicação web.
              </p>
            </div>

            <div className="Dgrid">
              <h2 className="H2">Ferramentas</h2>
              <div className="Ferramentas">
                <img className="Fimg" src="/charles.png" alt="" />
                <p className="P">Charles Proxy</p>
              </div>
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
