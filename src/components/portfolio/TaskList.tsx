import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { NotaTaskList } from "./components/Nota-TaskList";
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
              <p className="P">
                Projeto back-end com API REST, sendo um app para criar tarefas, editar, deletar, consultar e receber notificações de aviso. 
              
              </p>
              <div className="mt-4">
                <NotaTaskList />
              </div>

              <div className="divTec">
                <h2 className="hTec">Tecnologias </h2>
                <p className="P TnotServ">
                  TypeScript | Node.js | Express | Vitest | Prisma Studio |
                  Class-validator | SQLite |
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
