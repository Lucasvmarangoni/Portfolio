import React from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { RowSpacingIcon, Cross2Icon } from "@radix-ui/react-icons";

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
          <button className="Button">
            <h2
              className="w-20 bg-BGB font-semibold 
                text-lg  rounded-md opacity-75"
            >
              Dica
            </h2>
          </button>
        </Collapsible.Trigger>

        <Collapsible.Content className="CollapsibleContent">
          <p className="P mt-2">--&gt; De alguns cliques na foto de perfil.</p>
        </Collapsible.Content>
      </div>
    </Collapsible.Root>
  );
};
