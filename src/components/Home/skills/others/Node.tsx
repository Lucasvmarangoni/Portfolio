import React from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { RowSpacingIcon, Cross2Icon } from "@radix-ui/react-icons";

export const Nodejs = () => {
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
            <img src="../../../../../public/node.png" alt="" className="IMG" />
            <p className="Title">Node.js</p>
            {open ? <Cross2Icon /> : <RowSpacingIcon />}
          </button>
        </Collapsible.Trigger>

        <Collapsible.Content>
          <div className="Dgrid">
            <h2 className="H2">Formação</h2>
            <div className="LogoImg">
              <img src="../../../../../public/rocketseat.png" alt="" />
              <p className="P">RocketSeat - Discover</p>
            </div>
          </div>

          <div className="Dgrid">
            <h2 className="H2">Prática</h2>
            <p className="P">
              Desenvolvi um projeto utilizando TypeScript, sendo um sistema para
              jogadores online encontrarem equipes, no NLW Ignite eSports,
              evento promovido pela RocketSeat.
            </p>
          </div>

          <div className="Dgrid">
            <h2 className="H2">Projetos</h2>
            <a href="https://github.com/Ldragk/NLW-Ignite-2022">
              <p className="Proj">NLW Ignite eSports </p>
            </a>
          </div>
        </Collapsible.Content>
      </div>
    </Collapsible.Root>
  );
};
