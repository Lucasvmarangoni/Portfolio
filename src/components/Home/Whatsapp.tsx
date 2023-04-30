import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useState } from "react";



export function Whatsapp() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const link = `https://api.whatsapp.com/send?phone=+5527999880848&text=Meu nome é ${name}, da empresa ${company}. ${message}`

  return (

    <Dialog.Description className="mt-0">
      <div className="grid gap-4 justify-center">
        <form
          id="form"
          method="POST"
          action={link}
          target="_blank"
          className="grid row-span-3 gap-3"
        >


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
            <label htmlFor="inputName">Empresa:</label>
            <input
              className="bg-BGH border-[#ffffff0e] border-[0.5px]"
              id="inputName"
              name="name"
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
        </form>
        <button
          form="form"
          type="submit"
          className="bg-BGB w-64 font-semibold py-2 text-base setinha hover:after:right-[103px] hover:opacity-70"
          disabled={!message}
        >
          Enviar
        </button>
      </div>
    </Dialog.Description>

  );
}
