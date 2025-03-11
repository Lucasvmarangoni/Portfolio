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
            <img src="https://img.shields.io/badge/version-1.1.0-white" alt="Versão 1.1.0"></img>
            <span className="text-T2 brightness-150">Out 2023 - Nov 2023 | </span>Filas na persistência dos dados de usuário, cluster de replicas mongodb, 
            conteinerização da aplicação, reestruturação da arquitetura dos módulos com ênfase em DDD, config estrita do typescript e refatoração.
            <a href='https://trello.com/invite/b/LtPCRU0V/ATTI8ed1d7db6259cc3009736a67b0bea2340E9D2648/manutencao-currency-converter' target='_blank'>
         <u >Changelog</u></a>
          </p>

          <p className="p mt-5">
            <a href="https://github.com/Lucasvmarangoni/TaskList/commit/92bf7f0" title="clique para ver o código da versão 1.0.0">
              <img src="https://img.shields.io/badge/version-1.0.0-white" alt="Versão 1.0.0"></img></a> 
           <span className="text-T2 brightness-150">Jal 2023 - Set 2023 | </span>Conversor de moedas consumindo a API Exchangerates. Desenvolvido com Nest, e 
           arquitetura de monólito modular. Possui testes unitários, integração e e2e, tratamento de exceções, logs, rate limit, 
           cache, doc. openAPI e authn (local e OAuth)
          </p>
          

        </Collapsible.Content>
      </div>
    </Collapsible.Root>
  );
};
