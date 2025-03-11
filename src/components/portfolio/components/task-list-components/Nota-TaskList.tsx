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
            <img src="https://img.shields.io/badge/version-1.0.0-white" alt="Version 1.0.0"></img>
            <span className="text-T2 brightness-150">Dec 2022 | </span>The project started with a simple and basic back-end.
          </p>

          <p className="p mt-5">
            <a href="https://github.com/Lucasvmarangoni/TaskList/commit/92bf7f0" title="click to see version 2.0.0 code">
              <img src="https://img.shields.io/badge/version-2.0.0-white" alt="Version 2.0.0"></img></a>
            <span className="text-T2 brightness-150">Jan 2023 - Mar 2023 | </span>The project became a REST API, CRUD, with a notification system, developed with Node.js, Express, and Typescript, applying unit tests, validations, DDD, TDD, in-memory database, factory pattern, singleton, dependency inversion, and SOLID principles.
          </p>

          <p className="p mt-5">
            <a href="" title="click to see version 2.1.0 code"><img src="https://img.shields.io/badge/version-2.1.0-black" alt="Version 2.0.0"></img></a>
            <span className="text-T2 brightness-150">May 2023 - Jul 2023 | </span>In this update, I improved tests, added mocks, e2e tests, exception handling, status codes, logging, rate limit, caching, graceful shutdown, database change, OpenAPI docs, workflow, authentication, and refactoring.
          </p>


        </Collapsible.Content>
      </div>
    </Collapsible.Root>
  );
};
