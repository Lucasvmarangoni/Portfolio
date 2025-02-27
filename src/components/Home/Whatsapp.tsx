import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import { MOver, MOut, SpanTag, SendRequiredButton } from "./capa/functions/Required-itens";
import { Motion } from "../functions/Motion";



export function Whatsapp() {
  const [name, setName] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  let meuNome: string = ""
  let daEmpresa: string = ""
  let pontoName: string = ""
  let pontoCompany: string = ""


  if (name) {
    meuNome = "Meu nome é "
    if (!company) {
      pontoName = "."
    }
  }
  if (company) {
    pontoCompany = "."
    if (!name) {
      daEmpresa = "Sou da empresa "

    } else {
      daEmpresa = ", da empresa "
    }
  }

  const number: string = ""

  const link = `https://api.whatsapp.com/send?phone=${number}&text=${meuNome}${name}${pontoName}${daEmpresa}${company}${pontoCompany} ${message}`

  function CustomNavLink({ ...rest }: NavLinkProps) {


    if (!message) {
      return <span className={`${SendRequiredButton}`}>Enviar</span>;
    }
    return <NavLink className={`${SendRequiredButton}`} {...rest} />;
  }

  return (

    <Dialog.Description className="mt-0 ">
      <div className="grid gap-4 justify-center ">
        <div className="grid gap-3 ">

          {Motion(1.0, 0.5,
            <div className="text-T2 grid gap-2  
            
            ">
              <label htmlFor="inputName">Nome:</label>
              <input
                className="bg-BGH border-[#ffffff0e] border-[0.5px] "
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
          )}

          {Motion(1.0, 0.6,
            <div className="text-T2 grid gap-2       
            ">
              <label className="" htmlFor="inputCompany">
                Empresa:
              </label>
              <input
                className="bg-BGH border-[#ffffff0e] border-[0.5px] "
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
          )}

          {Motion(1.0, 0.7,
            <div className="text-T2 grid gap-2         
            ">
              <label className="text-T2" htmlFor="inputMessage">
                Mensagem:
              </label>
              <textarea
                className="bg-BGH border-[#ffffff0e] border-[0.5px] h-40"
                id="inputMessage"
                name="message"
                required
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
            </div>
          )}
        </div>

        {Motion(1.0, 0.8,
          <button
            onMouseOver={() => {
              MOver(message);
            }}

            onMouseOut={() => {
              MOut(message);
            }}
            type="submit"
            className="grid justify-center items-center 
            
            "
          >
            <CustomNavLink to={link} target="_blank"
            >Enviar
            </CustomNavLink>
            {SpanTag("O campo mensagem é obrigatório!")}
          </button>
        )}
      </div>
    </Dialog.Description>

  );
}
