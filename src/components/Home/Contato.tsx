import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { Email } from "./Email";
import { Whatsapp } from "./Whatsapp";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Motion } from "../functions/Motion";

export function Contato() {
  const [contact, setContact] = useState(0);
  const [emailOpacity, setEmailOpacity] = useState("opacity-50");
  const [whatsappOpacity, setWhatsappOpacity] = useState("opacity-100");
  const contactArray = [<Email />, <Whatsapp />];
  
  function email() {
    setContact(0);
    setEmailOpacity("opacity-50");
    setWhatsappOpacity("opacity-100");
  }
  
  function whatsapp() {
    setContact(1);
    setEmailOpacity("opacity-100");
    setWhatsappOpacity("opacity-50");
    alert("Desabilitado");
  }
  
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <p className="cursor-pointer text-center text-lg hover:text-[1.05rem]">Contact</p>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 w-full" />
        <Dialog.Content
          className="bg-BGC border border-[#ffffff0e] p-5 rounded-lg grid gap-4 
          fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 focus:outline-none"
        >
          <Dialog.Title className="text-xl text-center flex flex-wrap gap-2 justify-center w-full max-wlg">
            <button 
              className={`text-black px-4 py-1 bg-BGB rounded-md brightness-[1.5] hover:brightness-200 w-[48%] ${emailOpacity}`}
              onClick={email}
            >
              Email
            </button>
            <button 
              className={`text-black px-4 py-1 bg-BGB rounded-md brightness-[1.5] hover:brightness-200 w-[48%] ${whatsappOpacity}`}
              onClick={whatsapp}
            >
              Whatsapp
            </button>
          </Dialog.Title>
          {contactArray[contact]}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
