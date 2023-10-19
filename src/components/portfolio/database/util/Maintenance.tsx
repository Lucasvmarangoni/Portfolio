import React from "react";
import * as Collapsible from "@radix-ui/react-collapsible";

interface MaintenanceProps {
  title: string;
  content: string;
}

const Maintenance: React.FC<MaintenanceProps> = ({ title, content }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Collapsible.Root
      className="CollapsibleRoot"
      open={open}
      onOpenChange={setOpen}
    >
      <div>
        <Collapsible.Trigger className="CollapsibleTrigger">
          <button className="hTec cursor-pointer">
            <h2 className="mb-3 text-center">{title}</h2>
          </button>
        </Collapsible.Trigger>

        <Collapsible.Content className="CollapsibleContent">
        <p className="P" dangerouslySetInnerHTML={{ __html: content }}></p>

        </Collapsible.Content>
      </div>
    </Collapsible.Root>
  );
};

export default Maintenance;
