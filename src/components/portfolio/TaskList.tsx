import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "./styles.css";

export const TaskList = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild className="m-auto">
        <div className="divCapa">
          <button>
            <img className="projCapa" src="/tasklist.png" alt="" />
          </button>
          <h2 className="imgTitle"> TASKLIST</h2>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent focus:outline-none">
          <Dialog.Title className="DialogTitle">
            <h1 className="projTitle">
              TaskList - <span className="projYear">2023</span>
            </h1>
          </Dialog.Title>

          <Dialog.Description className="Dgrid">
            <div id="img" className="banner">
              <img src="/tasklist.png"></img>
            </div>

            <div className="Icon">
              <img className="h-5" src="/github-proj.png" alt="" />
              <a
                target={"_blank"}
                rel={"noreferrer"}
                className="hover:underline"
                href="https://github.com/Lucasvmarangoni/TaskList"
              >
                Github
              </a>
            </div>

            <div>
              <p className="text-T1 brightness-150 text-2xl my-2">--{">"} ⚒ Em Desenvolvimento!</p>
              <p className="P">
                O projeto é uma API Rest para criar e manipular tarefas por meio
                de rotas utilizando os verbos http e banco de dados, com uma
                interface front-end básica para interação do usuário.
              </p>
              <p className="P">
                Tem o objetivo de consolidar meus conhecimentos principalmente
                no Back-end e conceitos de Engenharia de Software.
              </p>
             
              <div className="divTec">
                <h2 className="hTec">Tecnologias </h2>
                <p className="P TnotServ">
                  TypeScript | Node.js | Express | Vitest | Supertest | Prisma Studio |
                  SQLite | React.js | TailWind | Axios | Vite.js |
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
