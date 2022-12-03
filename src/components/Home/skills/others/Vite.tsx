import React from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { RowSpacingIcon, Cross2Icon } from "@radix-ui/react-icons";

export const Vitejs = () => {
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
            <img
              src="/vite.png"
              alt=""
              className="IMG w-[30px] h-[30px"
            />
            <p className="Title">Vite.js</p>
            {open ? <Cross2Icon /> : <RowSpacingIcon />}
          </button>
        </Collapsible.Trigger>

        <Collapsible.Content>
          <div className="Dgrid">
            <h2 className="H2">Formação</h2>
            <p className="P">
              {" "}
              Aprendi enquanto praticava e enquanto participei e fiz o projeto
              do evento NLW da RocketSeat
            </p>
          </div>

          <div className="Dgrid">
            <h2 className="H2">Prática</h2>
            <p className="P">
              Desenvolvi um projeto utilizando Vite.js com Typescript, sendo um
              sistema para jogadores online encontrarem equipes, no NLW Ignite
              eSports, evento promovido pela RocketSeat.
            </p>
            <p className="P">Utilizei Vite.js no desenvolvimento desse website.</p>
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
