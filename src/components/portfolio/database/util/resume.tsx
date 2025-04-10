import React from "react";
import * as Collapsible from "@radix-ui/react-collapsible";

interface ResumeProps {  
  content: string;
}

const Resume: React.FC<ResumeProps> = ({ content }) => {
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
            <h2 className="text-center w-full">Resume</h2>
          </button>
        </Collapsible.Trigger>

        <Collapsible.Content className="CollapsibleContent text-T1  border-b-4   border-[#3b27535b] pb-4">
        <p className="pP" dangerouslySetInnerHTML={{ __html: content }}>

        </p>
       
        </Collapsible.Content>
      </div>
    </Collapsible.Root>
  );
};

export default Resume;
