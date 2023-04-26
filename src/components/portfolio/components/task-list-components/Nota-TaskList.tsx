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
            <a href="https://github.com/Lucasvmarangoni/NLW-Ignite-2022" target="_blank">NLW ESpots Ignite</a>
            da RocketSeat, ou seja, um back-end simples e básico.
            Após alcançar esse objetivo, ainda pretendia fazer outras coisas (funcionalidades) antes de começar a aprimorar a engenharia e arquitetura do software, mas comecei a aprimorar algumas coisas e acabei decidindo por já organizar tudo logo.
          </p>       

          <p className="P mt-5">
          <img src="https://img.shields.io/badge/version-2.0.0-white" alt="Versão 2.0.0"></img>
            Então comecei a aplicar os conhecimento obtidos com o evento
            <a href="https://github.com/Lucasvmarangoni/notifications-service" target="_blank">Ignite Lab 04 - Notification Service</a>
            da RocketSeat. Ao longo dessa etapa, mudei muitas decisões iniciais. Por não ter iniciado com TDD, alguns testes unitários
            ficaram para depois da funcionalidade estar pronta, assim como muitas outras coisas, como validações e outros recursos
            de estrutura e engenharia.
            - Por ter desenvolvido o projeto dessa forma, tive que alterar muitas coisas por diversas vezes, o que foi bom, pois aumentou meu tempo programando e resolvendo os problemas que surgiam, além de desenvolver minha habilidade de manutenção do código.
          </p>

          <p className="P mt-5">
          <img src="https://img.shields.io/badge/version-3.0.0-white" alt="Versão 3.0.0"></img>
              A versão 3.0.0 já esta em planejamento. Será aplicado o conhecimento do projeto 
              <a href="https://github.com/Lucasvmarangoni/Best-Surfing" target="_blank">Best-Surfing</a> 
              afim de aprimorar o projeto e consolidar esses novos conhecimentos.
          </p>
        </Collapsible.Content>
      </div>
    </Collapsible.Root>
  );
};
