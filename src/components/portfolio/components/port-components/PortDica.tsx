import React from "react";
import * as Collapsible from "@radix-ui/react-collapsible";

export const PortDica = () => {
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
            <h2 className="text-lg">Dica</h2>
          </button>
        </Collapsible.Trigger>

        <Collapsible.Content className="CollapsibleContent">
          <p className="P mt-2">--&gt; De alguns cliques na foto de perfil.</p>
        </Collapsible.Content>
      </div>
    </Collapsible.Root>
  );
};
