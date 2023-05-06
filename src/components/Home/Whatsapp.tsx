import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import { MOver, MOut, SpanTag, SendObligatoryButton } from "./capa/functions/Obligatory-itens";



export function Whatsapp() {
  const [name, setName] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  let meuNome: string
  let daEmpresa: string
  let ponto: string
  name === "" ? meuNome = "" : meuNome = "Meu nome é "
  company === "" ? (daEmpresa = "", ponto = "") : (daEmpresa = ", da empresa ", ponto = ".")

  const link = `https://api.whatsapp.com/send?phone=5527999880848&text=${meuNome}${name}${daEmpresa}${company}${ponto} ${message}`

  function CustomNavLink({ ...rest }: NavLinkProps) {
    

    if (!message) {
      return <span className={`${SendObligatoryButton}`}>Enviar</span>;
    }
    return <NavLink className={`${SendObligatoryButton}`} {...rest} />;
  }

  return (

    <Dialog.Description className="mt-0">
      <div className="grid gap-4 justify-center">
        <div className="grid row-span-3 gap-3">
          <div className="text-T2 grid gap-2 w-5 ">
            <label htmlFor="inputName">Nome:</label>
            <input
              className="bg-BGH border-[#ffffff0e] border-[0.5px]"
              id="inputName"
              name="name"
              type="text"
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
          </div>

          <div className="text-T2 grid gap-2 w-5 ">
            <label className="" htmlFor="inputCompany">
              Empresa:
            </label>
            <input
              className="bg-BGH border-[#ffffff0e] border-[0.5px]"
              id="inputCompany"
              name="company"
              type="text"
              required
              onChange={(e) => {
                setCompany(e.target.value);
              }}
              value={company}
            />
          </div>

          <div className="text-T2 grid gap-2 w-64">
            <label className="text-T2" htmlFor="inputMessage">
              Mensagem:
            </label>
            <textarea
              className="bg-BGH border-[#ffffff0e] border-[0.5px]"
              id="inputMessage"
              name="message"
              required
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </div>
        </div>
        <button
          onMouseOver={() => {
            MOver(message);
          }}

          onMouseOut={() => {
            MOut(message);
          }}
          type="submit"          
          className="w-64 brightness-150 grid justify-center items-center"
        >
          <CustomNavLink to={link} target="_blank"
          >Enviar
          </CustomNavLink>
          {SpanTag("O campo mensagem é obrigatório!")}
        </button>
      </div>
    </Dialog.Description>

  );
}
