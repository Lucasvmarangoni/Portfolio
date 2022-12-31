import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "./styles.css";

export const NotificationsService = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild className="m-auto">
        <div className="divCapa">
          <button>
            <img
              id="mouse"
              className="projCapa"
              src="/igniteLab04.png"
              alt=""
            />
          </button>
          <h2 className="imgTitle"> NOTIFICATIONS SERVICE</h2>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent focus:outline-none">
          <Dialog.Title className="DialogTitle">
            <h1 className="projTitle">
              Notifications Service - <span className="projYear">2022</span>
            </h1>
          </Dialog.Title>

          <Dialog.Description className="Dgrid">
            <div id="img" className="banner">
              <img title="VÍDEO EM BREVE" src="/igniteLab04.png"></img>
            </div>

            <div className="Icon">
              <img className="h-5" src="/github-proj.png" alt="" />
              <a
                target={"_blank"}
                rel={"noreferrer"}
                className="hover:underline"
                href="https://github.com/Ldragk/notifications-service"
              >
                Github
              </a>
            </div>

            <div>
              <p className="P">
                O projeto é um sistema de serviço de notificações,{" "}
                <span className="text-T1">Back-end</span>. Possui as seguintes
                funcionalidades e rotas: Send, Cancel, Count Recipient, Get
                Recipient, Read, Unread.
              </p>

              <p className="P mt-2">
                --{">"} Desenvolvido durante o evento Ignite Lab 04 da
                RocketSeat.
              </p>
              <div className="divTec">
                <h2 className="hTec">Tecnologias </h2>
                <p className="P TnotServ">
                  TypeScript | Node.js | Nest.js | Jest.js | Prisma Studio |
                  SQLite
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
