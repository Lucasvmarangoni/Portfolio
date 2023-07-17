import React from "react";
import * as Collapsible from "@radix-ui/react-collapsible";

export const registrosCurrency = () => {
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
            
          </p>

          
        </Collapsible.Content>
      </div>
    </Collapsible.Root>
  );
};
