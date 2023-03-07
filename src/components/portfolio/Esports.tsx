import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Slides } from "../functions/Slides";
import "./styles.css";

const onMouse = () => {
  const onmouse = document.querySelector("#mouse") as HTMLImageElement;
  return onmouse.setAttribute("src", "/Menu.jpg");
};
const outMouse = () => {
  const onmouse = document.querySelector("#mouse") as HTMLImageElement;
  return onmouse.setAttribute("src", "/Hnlw.jpg");
};

export const Esports = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild className="m-auto">
        <div className="divCapa">
          <button onMouseOver={onMouse} onMouseOut={outMouse}>
            <img id="mouse" className="projCapa" src="/Hnlw.jpg" alt="" />
          </button>
          <h2 className="imgTitle"> ESPORTS DUO</h2>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent focus:outline-none">
          <Dialog.Title className="DialogTitle">
            <h1 className="projTitle">
              Esports Duo - <span className="projYear">2022</span>
            </h1>
          </Dialog.Title>

          <Dialog.Description className="Dgrid">
            <div id="img" className="banner">
              <video controls src="/eSports.mp4"></video>
            </div>

            <div className="Icon">
              <img className="h-5" src="/github-proj.png" alt="" />
              <a
                target={"_blank"}
                rel={"noreferrer"}
                className="hover:underline"
                href="https://github.com/Lucasvmarangoni/NLW-Ignite-2022"
              >
                Github
              </a>
            </div>

            <div>
              <p className="P">
                O projeto tem a finalidade de ajudar jogadores de jogos online a
                encontrarem uma dupla, assim possibilita que criem anúncios para
                que outros jogadores possam entrar em contato.
              </p>
              <p className="P">
                Nos anúncios é possível informar várias características sobre o
                jogador e suas preferências de jogabilidade.
              </p>
              <p className="P mt-2">
                --{">"} Desenvolvido durante o evento NLW Esports Ignite da
                Rocketseat.
              </p>
              <div className="divTec">
                <h2 className="hTec">Tecnologias </h2>
                <p className="P">
                  Typescript | Node.js | Express | SQLite | Prisma Studio |
                  React.js | Vite.js | Axios | Tailwind |
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
