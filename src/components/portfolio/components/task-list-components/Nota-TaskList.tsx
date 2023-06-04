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
          <p className="P mt-2">
            <img src="https://img.shields.io/badge/version-1.0.0-white" alt="Versão 1.0.0"></img>
            O projeto teve seu desenvolvimento iniciado de acordo com o aprendizado do evento
            <a href="https://github.com/Lucasvmarangoni/NLW-Ignite-2022" target="_blank">NLW ESpots Ignite</a> da
            RocketSeat, ou seja, um back-end simples e básico.
          </p>

          <p className="P mt-5">
            <a href="https://github.com/Lucasvmarangoni/TaskList/commit/92bf7f0" title="clique para ver o código da versão 2.0.0">
              <img src="https://img.shields.io/badge/version-2.0.0-white" alt="Versão 2.0.0"></img></a>
            Logo após concluir a v1.0.0, comecei a aplicar os conhecimentos obtidos com o evento <a href="https://github.com/Lucasvmarangoni/notifications-service" target="_blank">
              Ignite Lab 04 - Notification Service</a> da RocketSeat. Apliquei testes unitários, validações, DDD, TDD, in memory database, factory pattern, singleton,
            inversão de dependência e princípios SOLID.
          </p>

          <p className="P mt-5">
            <a href="" title="clique para ver o código da versão 2.1.0"><img src="https://img.shields.io/badge/version-2.1.0-black" alt="Versão 2.0.0"></img></a>
            Nesta atualização, estou aplicando parcialmente os conhecimentos que adquiri no projeto <a href="https://github.com/Lucasvmarangoni/Best-Surf" target="_blank">Best-Surf</a>.
            Estou aprimorando e adicionando testes, aplicando tratamento de erros, status code, logging, cache, graceful shutdown,
            troca do banco de dados para MongoDB, documentação OpenAPI, automação de fluxo de trabalho e refatoração para performance.
          </p>

          <p className="P mt-5">
            <img src="https://img.shields.io/badge/version-3.0.0-white" alt="Versão 3.0.0"></img>
            A versão 3.0.0 já esta em planejamento. Será aplicado o conhecimento adquirido no projeto
            <a href="https://github.com/Lucasvmarangoni/Best-Surf" target="_blank"> Best-Surf </a>
            além de outros.
          </p>
        </Collapsible.Content>
      </div>
    </Collapsible.Root>
  );
};
