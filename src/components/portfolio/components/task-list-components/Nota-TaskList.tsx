import React from "react";
import * as Collapsible from "@radix-ui/react-collapsible";

export const NotaTaskList = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Collapsible.Root
      className="CollapsibleRoot"
      open={open}
      onOpenChange={setOpen}
    >
      <div>
        <Collapsible.Trigger className="CollapsibleTrigger">
          <button className="    
         hTec cursor-pointer"
          >
            <h2 className="text-lg">Registro de Desenvolvimento</h2>
          </button>
        </Collapsible.Trigger>

        <Collapsible.Content className="CollapsibleContent">
          <p className="p mt-2">
            <img src="https://img.shields.io/badge/version-1.0.0-white" alt="Versão 1.0.0"></img>
            <span className="text-[#3b2753] brightness-150">Dez 2022 | </span>O projeto teve seu desenvolvimento iniciado com um back-end simples e básico.
          </p>

          <p className="p mt-5">
            <a href="https://github.com/Lucasvmarangoni/TaskList/commit/92bf7f0" title="clique para ver o código da versão 2.0.0">
              <img src="https://img.shields.io/badge/version-2.0.0-white" alt="Versão 2.0.0"></img></a> 
           <span className="text-[#3b2753] brightness-150">Jan 2023 - Mar 2023 | </span>O projeto passou a ser uma API REST, CRUD, com sistema de notificação, desenvolvida com Node.js, Express e Typescript, aplicando testes unitários,
            validações, DDD, TDD, in memory database, factory pattern, singleton, inversão de dependência e princípios SOLID.
          </p>

          <p className="p mt-5">
            <a href="" title="clique para ver o código da versão 2.1.0"><img src="https://img.shields.io/badge/version-2.1.0-black" alt="Versão 2.0.0"></img></a>
            <span className="text-[#3b2753] brightness-150">Mai 2023 - Jul 2023 | </span>Nesta atualização, aprimorei testes, adicionei mocks, testes e2e, tratamento de exceções, status code, logging, rate
            limit, cache, graceful shutdown, troca do banco de dados, doc. openAPI, workflow, autenticação e refatoração.
          </p>

        </Collapsible.Content>
      </div>
    </Collapsible.Root>
  );
};
