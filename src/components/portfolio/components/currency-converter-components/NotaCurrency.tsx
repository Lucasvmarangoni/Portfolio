import React from "react";
import * as Collapsible from "@radix-ui/react-collapsible";

export const NotaCurrency = () => {
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
            <img src="https://img.shields.io/badge/version-1.1.0-white" alt="Version 1.1.0"></img>
            <span className="text-T2 brightness-150">Oct 2023 - Nov 2023 | </span>Queues for user data persistence, MongoDB replica cluster,
            application containerization, reorganization of module architecture with emphasis on DDD, strict TypeScript configuration, and refactoring.
            <a href='https://trello.com/invite/b/LtPCRU0V/ATTI8ed1d7db6259cc3009736a67b0bea2340E9D2648/manutencao-currency-converter' target='_blank'>
              <u>Changelog</u></a>
          </p>

          <p className="p mt-5">
            <a href="https://github.com/Lucasvmarangoni/TaskList/commit/92bf7f0" title="click to see version 1.0.0 code">
              <img src="https://img.shields.io/badge/version-1.0.0-white" alt="Version 1.0.0"></img></a>
            <span className="text-T2 brightness-150">Jul 2023 - Sep 2023 | </span>Currency converter consuming the Exchangerates API. Developed with Nest, and
            modular monolith architecture. It has unit, integration, and e2e tests, exception handling, logs, rate limit,
            caching, OpenAPI docs, and authentication (local and OAuth).
          </p>



        </Collapsible.Content>
      </div>
    </Collapsible.Root>
  );
};
