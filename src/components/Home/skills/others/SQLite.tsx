import React from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { RowSpacingIcon, Cross2Icon } from "@radix-ui/react-icons";

export const SQLite = () => {
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
            <img src="../public/SQLite.png" alt="" className="IMG" />
            <h2 className="Title">SQLite</h2>
            {open ? <Cross2Icon /> : <RowSpacingIcon />}
          </button>
        </Collapsible.Trigger>

        <Collapsible.Content>
          <div className="Dgrid">
            <h2 className="H2">Formação</h2>
            <div className="LogoImg">
              <img src="./public/rocketseat.png" alt="" />
              <p className="P">RocketSeat - Discover</p>
            </div>
          </div>

          <div className="Dgrid">
            <h2 className="H2">Prática</h2>
            <p className="P"></p>
          </div>

          <div className="Dgrid">
            <h2 className="H2">Projetos</h2>
            <a href="https://github.com/Ldragk/NLW-Ignite-2022">
              <p className="Proj">NLW Ignite eSports </p>
            </a>
          </div>

          <div className="Dgrid">
            <h2 className="H2">Ferramentas</h2>
            <div className="Ferramentas">
              <img className="Fimg" src="../public/beekeeper.png" alt="" />
              <p className="P">Beekeeper Studio</p>
            </div>
          </div>
        </Collapsible.Content>
      </div>
    </Collapsible.Root>
  );
};
