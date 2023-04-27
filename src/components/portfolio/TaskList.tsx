import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { NotaTaskList } from "./components/task-list-components/Nota-TaskList";
import "./styles.css";

export const TaskList = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild className="m-auto">
        <div className="divCapa">
          <button>
            <img className="projCapa" src="/tasklist.png" alt="" />
          </button>
          <h2 className="imgTitle">TASKLIST</h2>
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

            <div className="flex gap-2">
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
              <img src="https://img.shields.io/badge/version-2.0.0-black" alt="Versão 2.0.0"></img>
              <img src="https://img.shields.io/badge/Back end-black" alt="Back end"></img>
              <img src="https://img.shields.io/badge/Projeto pessoal-black" alt="Projeto pessoal"></img>

            </div>


            <div>              
              <p className="P mt-4">


                O projeto é uma API REST para servir uma aplicação de Lista de tarefas.
                Permite criar, editar, deletar, consultar e receber notificações.

              </p>

              <p className="P mb-8 mt-4">
                Inicialmente teve o objetivo de consolidar meus conhecimentos de Back-end e Engenharia de Software,
                além de praticar a utilização de Node.js com Express e Prisma Studio. O objetivo agora é continuar utilizando esse projeto para praticar,
                aprimorando-o com as novas habilidades, tecnologias e ferramentas que adquiro desenvolvendo outros projetos de eventos ou cursos.
              </p>
              <div className="mt-4">
                <NotaTaskList />
              </div>

              <div className="divTec">
                <h2 className="hTec">Tecnologias </h2>
                <p className="P TnotServ">
                  TypeScript | Node | Express | Vitest | Prisma Studio |
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
