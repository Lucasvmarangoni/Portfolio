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
      className="w-full"
      open={open}
      onOpenChange={setOpen}
    >
      <div>
        <Collapsible.Trigger className="w-full">
          <button className="hTec w-full cursor-pointer">
            <h2 className="text-center w-full">{title}</h2>
          </button>
        </Collapsible.Trigger>

        <Collapsible.Content className="CollapsibleContent text-T2  border-b-2 border-[#3b27535b] pb-4">
        <p className="P" dangerouslySetInnerHTML={{ __html: content }}></p>

        </Collapsible.Content>
      </div>
    </Collapsible.Root>
  );
};

export default Maintenance;
