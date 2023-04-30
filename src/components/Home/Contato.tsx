import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Email } from "./Email";
import { Whatsapp } from "./Whatsapp";

export function Contato() {

  let [contact, setContact] = useState(0);
  const contactArray = [<Email />, <Whatsapp />];
  function email() {
    setContact(contact = 0);
  }
  function whatsapp() {
    setContact(contact = 1);
  }



  return (
    <Dialog.Root>
      <Dialog.Trigger asChild className="DialogTrigger">
        <p>Contato</p>
      </Dialog.Trigger>


      <Dialog.Portal>

        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content
          className="bg-BG border border-[#ffffff0e]
    p-7 
    rounded-md 
    grid 
    gap-5 
    fixed 
    top-[50%] 
    left-[50%]     
    transform 
    -translate-x-1/2 
    -translate-y-1/2  
    focus:outline-none"
        >
          <Dialog.Title className="text-2xl flex gap-2 m-auto" >
            <button className="text-black px-3 bg-BGB m-auto rounded-md "
              onClick={email}
            >
              Email
            </button>
            <button className="text-black px-3 bg-BGB m-auto rounded-md "
              onClick={whatsapp}
            >
              Whatsapp
            </button>
          </Dialog.Title>

          {contactArray[contact]}

          <Dialog.Close asChild>           
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
