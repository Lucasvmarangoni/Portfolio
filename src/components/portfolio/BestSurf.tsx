import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "./styles.css";

export const BestSurf = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild className="m-auto">
        <div className="divCapa">
          <button>
            <img className="projCapa" src="/bestsurf.png" alt="" />
          </button>
          <h2 className="imgTitle"> BEST SUFT</h2>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent focus:outline-none">
          <Dialog.Title className="DialogTitle">
            <h1 className="projTitle">
              Best Surf - <span className="projYear">2023</span>
            </h1>
          </Dialog.Title>

          <Dialog.Description className="Dgrid">
            <div id="img" className="banner">
              <img src="/bestsurf.png"></img>
            </div>

            <div className="Icon">
              <img className="h-5" src="/github-proj.png" alt="" />
              <a
                target={"_blank"}
                rel={"noreferrer"}
                className="hover:underline"
                href="https://github.com/Lucasvmarangoni/Best-Surf"
              >
                Github
              </a>
            </div>

            <div>
              <p className="P">
                --{">"} Projeto oferecido pelo desenvolvedor Waldemar Neto, do canal do
                YouTube Waldemar Neto - Dev Lab.
              </p>
              <p className="P mt-2">
                É uma aplicação que monitora o clima nas praia e permite ao
                usuário cadastrar suas praias de interesses e monitora-las, além
                de receber informações úteis, para aproveitar ao máximo seu
                esporte. Nesse projeto vou criar e rodar micro-serviços na cloud
                utilizando Node.js com Typescript seguindo as melhores práticas
                de desenvolvimento em um curso que vai do desenvolvimento a
                produção.
              </p>
              <p className="P  mt-2">
                Durante o curso é criado uma API para calcular a melhor condição
                de surf entre varias praias, essa API tem como objetivo servir a
                aplicação web. A aplicação web não é construída durante o curso,
                pois ela não é o foco do conteúdo, ela é disponibilizada pronta,
                portanto o front-end não é construído por mim.
              </p>

              {/* <div className="mt-4">
                <NotaTaskList />
              </div> */}

              <div className="divTec">
                <h2 className="hTec">Tecnologias </h2>
                <p className="P TnotServ">
                  TypeScript | Node js | Express | MongoDB | Mongoose | Jest |
                  Supertest | Github Actions.
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
