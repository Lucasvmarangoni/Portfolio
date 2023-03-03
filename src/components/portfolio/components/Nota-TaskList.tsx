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
          <button className="Icon">
            <h2 className="text-lg">Nota</h2>
          </button>
        </Collapsible.Trigger>

        <Collapsible.Content className="CollapsibleContent">
          <p className="P mt-2">
            Não iniciei o projeto aplicando TDD, nem mesmo DDD ou Engenharia de
            software. A ideia era consolidar meu estudos, de cursos e projetos
            de eventos, com a prática e aprender mais ao longo do
            desenvolvimento. Assim inicie desenvolvendo de acordo com o
            aprendizado do evento{" "}
            <a
              href="https://github.com/Lucasvmarangoni/NLW-Ignite-2022"
              target="_blank"
            >
              NLW ESpots Ignite
            </a>
            da RocketSeat.
          </p>

          <p className="P">
            Após alcançar esse objetivo ainda pretendia fazer outras coisas
            (funcionalidades) antes de começar a aprimorar a engenharia e
            arquitetura do software, mas comecei a aprimorar algumas coisas e
            acabei decidindo por já organizar tudo logo, de acordo com o
            aprendizado com o evento{" "}
            <a
              href="https://github.com/Lucasvmarangoni/notifications-service"
              target="_blank"
            >
              Ignite Lab 04
            </a>{" "}
            da RocketSeat.
          </p>

          <p className="P">
            Ao longo dessa etapa mudei muitas decisões iniciais, como abandonar
            a ideia de criar um front-end. Por não ter iniciado com TDD os
            testes unitários ficaram para o final, assim como muitas outras
            coisas, como validações e entre outros recursos de estrutura e
            engenharia. Por ter desenvolvido o projeto dessa forma tive que
            alterar muitas coisas por diversas vezes, o que foi bom, pois
            aumentou meu tempo programando e resolvendo problemas (muitos), além
            de desenvolver minha habilidade de manutenção do código.
          </p>
        </Collapsible.Content>
      </div>
    </Collapsible.Root>
  );
};
